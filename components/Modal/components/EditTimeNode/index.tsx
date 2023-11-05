import { useState } from 'react';
import { Typography, Divider, Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { TimeNodeType } from '@/constants/types/api';
import { TimeNodeVariantType } from '@/constants/types/timenode';

import useForm from '@/helpers/useForm';
import {
  useGetTimeNodeQuery,
  usePostTimeNodeMutation,
  usePutTimeNodeMutation,
} from '@/redux/apis/timeline';
import { useGetUserQuery } from '@/redux/apis/auth';
import { DATE_FORMAT } from '@/constants/timeFormat';
import { isEmptyObj } from '@/helpers/object';
import { closeModal as closeModalAction } from '@/redux/slices/modal';

import Field from '@/containers/Field';
import Icon from '@/components/Icon';
import {
  Wrapper,
  InputWrapper,
  IconGroup,
  IconOuter,
  IconWrapper,
} from './styled';
import data from './data';

type EditTimelineItemProps = {
  timenodeId?: string;
  time: number;
};

const EditTimeNode = ({ timenodeId, time }: EditTimelineItemProps) => {
  const { data: timeNodeData, error } = useGetTimeNodeQuery(timenodeId);
  const [postTimeNode, postResult] = usePostTimeNodeMutation();
  const [putTimeNode, putResult] = usePutTimeNodeMutation();

  const { data: sessionData } = useSession();
  const { data: queryData } = useGetUserQuery(sessionData?.user?.email);
  const userData = queryData?.data;

  const [selectedType, setSelectedType] = useState<TimeNodeVariantType>(
    (timeNodeData?.type as TimeNodeVariantType) || 'default',
  );
  const dispatch = useDispatch();
  const closeModal = () => dispatch(closeModalAction());
  const today = dayjs().format(DATE_FORMAT);
  const isNewItem = !timenodeId;
  const isSuccess = isNewItem ? postResult.isSuccess : putResult.isSuccess;

  const selectTypeHandler = (type: TimeNodeVariantType) => {
    setSelectedType(type);
  };

  const onSubmit = (data: TimeNodeType) => {
    if (!isNewItem) {
      const submitData = { ...timeNodeData, ...data, type: selectedType };
      putTimeNode({ ...submitData, id: timenodeId });
    } else {
      const submitData = {
        ...data,
        type: selectedType,
        time,
        date: today,
        userId: userData?.id,
      };
      postTimeNode(submitData);
    }
    closeModal();
  };

  const { errors, handleError, handleFormData, submitHandler } = useForm(
    data.fields,
    onSubmit,
    isSuccess,
  );

  if (!isNewItem && (isEmptyObj(timeNodeData) || error)) return null;

  return (
    <>
      <Typography variant="h6" align="center" marginBottom={2}>
        {data.title}
      </Typography>
      <Wrapper onSubmit={submitHandler}>
        <InputWrapper>
          <IconWrapper>
            <Icon type={selectedType} />
          </IconWrapper>
          {data.fields?.map((field, idx) => (
            <Field
              key={idx}
              errors={errors}
              isReset={isSuccess}
              handleError={handleError}
              handleFormData={handleFormData}
              {...field}
            />
          ))}
        </InputWrapper>
        <Divider sx={{ width: '100%' }} />
        <IconGroup>
          {data.icons?.map((icon, idx) => (
            <IconOuter key={idx}>
              <IconWrapper onClick={() => selectTypeHandler(icon.type)}>
                <Icon type={icon.type} />
              </IconWrapper>
              <Typography variant="body2" align="center">
                {icon.title}
              </Typography>
            </IconOuter>
          ))}
        </IconGroup>
        <Button variant="contained" type="submit" sx={{ marginTop: '16px' }}>
          {data.button.text}
        </Button>
      </Wrapper>
    </>
  );
};

export default EditTimeNode;
