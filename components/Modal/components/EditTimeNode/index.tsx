import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
} from '@/redux/apis/timenode';
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
  TimeFieldWrapper,
} from './styled';
import data, { title, timeFields } from './data';

type EditTimelineItemProps = {
  time: number;
  timenodeId?: string;
  isAddItem?: boolean;
};

const EditTimeNode = ({ time, timenodeId, isAddItem }: EditTimelineItemProps) => {
  const router = useRouter();
  const { data: timeNodeResp, error } = useGetTimeNodeQuery(timenodeId);
  const [postTimeNode, postResult] = usePostTimeNodeMutation();
  const [putTimeNode, putResult] = usePutTimeNodeMutation();

  const { data: sessionData } = useSession();
  const { data: queryData } = useGetUserQuery(sessionData?.user?.email);
  const userData = queryData?.data;
  const timeNodeData = timeNodeResp?.data;

  const [selectedType, setSelectedType] =
    useState<TimeNodeVariantType>('default');
  const dispatch = useDispatch();
  const closeModal = () => dispatch(closeModalAction());
  const today = dayjs().format(DATE_FORMAT);
  const isNewItem = !timenodeId;
  const isSuccess = isNewItem ? postResult.isSuccess : putResult.isSuccess;

  useEffect(() => {
    setSelectedType((timeNodeData?.type as TimeNodeVariantType) || 'default');
  }, [timeNodeData]);

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
        date: today,
        userId: userData?.id,
      };
      postTimeNode(submitData);
    }
    closeModal();

    // asynchronous refresh timeline
    setTimeout(() => {
      router.refresh();
    }, 300);
  };

  const { errors, handleError, handleFormData, submitHandler } = useForm(
    [...timeFields, ...data.fields],
    onSubmit,
    isSuccess,
  );

  if (!isNewItem && (isEmptyObj(timeNodeData) || error)) return null;

  return (
    <>
      <Typography variant="h6" align="center" marginBottom={2}>
        {isAddItem ? title.add : title.edit}
      </Typography>
      <TimeFieldWrapper>
        {timeFields.map((field, idx) => {
          const isStartTime = field.name === 'startTime';
          const startTime = time - 1 < 0 ? 23 : time - 1;
          const value = isStartTime ? startTime : time;
          return (
            <>
              <Field
                key={idx}
                value={value}
                errors={errors}
                isReset={isSuccess}
                handleError={handleError}
                handleFormData={handleFormData}
                size="small"
                {...field}
              />
              <span>小時</span>
              {isStartTime && <span>~</span>}
            </>
          );
        })}
      </TimeFieldWrapper>
      <Wrapper onSubmit={submitHandler}>
        <InputWrapper>
          <IconWrapper>
            <Icon type={selectedType} />
          </IconWrapper>
          {data.fields?.map((field, idx) => (
            <Field
              key={idx}
              value={timeNodeData?.[field.name] || ''}
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
