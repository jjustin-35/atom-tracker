import { useState } from 'react';
import { Typography, Divider } from '@mui/material';

import { TimeNodeType } from '@/constants/types/api';
import { TimeNodeVariantType } from '@/constants/types/timenode';

import useForm from '@/helpers/useForm';
import {
  useGetTimeNodeQuery,
  usePostTimeNodeMutation,
  usePutTimeNodeMutation,
} from '@/redux/apis/timeline';
import { isEmptyObj } from '@/helpers/object';

import Field from '@/containers/Field';
import Icon from '@/components/Icon';
import { Wrapper, InputWrapper, IconGroup, IconWrapper } from './styled';
import data from './data';

type Props = {
  timenodeId?: string;
};

const EditTimelineItem = ({ timenodeId }: Props) => {
  const { data: timeNodeData, error } = useGetTimeNodeQuery(timenodeId);
  const [postTimeNode, postResult] = usePostTimeNodeMutation();
  const [putTimeNode, putResult] = usePutTimeNodeMutation();
  const [selectedType, setSelectedType] = useState<TimeNodeVariantType>(
    (timeNodeData.type as TimeNodeVariantType) || 'default',
  );
  const isNewItem = !timenodeId;
  const isSuccess = isNewItem ? postResult.isSuccess : putResult.isSuccess;
  const isSubmit = isSuccess;

  const selectTypeHandler = (type: TimeNodeVariantType) => {
    setSelectedType(type);
  };

  const onSubmit = (data: TimeNodeType) => {
    const submitData = {
      ...data,
      type: selectedType,
    };
    if (!isNewItem) return putTimeNode({ ...submitData, id: timenodeId });
    postTimeNode(submitData);
  };

  const { errors, handleError, handleFormData, submitHandler } = useForm(
    data.fields,
    onSubmit,
    isSubmit,
  );

  if (!isNewItem && (isEmptyObj(timeNodeData) || error)) return null;

  const type = (timeNodeData?.type || 'default') as TimeNodeVariantType;

  return (
    <>
      <Typography variant="h6" align="center" marginBottom={20}>
        {data.title}
      </Typography>
      <Wrapper onSubmit={submitHandler}>
        <InputWrapper>
          <Icon type={type} />
          {data.fields?.map((field, idx) => (
            <Field
              key={idx}
              errors={errors}
              isReset={isSubmit}
              handleError={handleError}
              handleFormData={handleFormData}
              {...field}
            />
          ))}
        </InputWrapper>
        <Divider />
        <IconGroup>
          {data.icons?.map((icon, idx) => (
            <IconWrapper key={idx} onClick={() => selectTypeHandler(icon.type)}>
              <Icon type={icon.type} />
            </IconWrapper>
          ))}
        </IconGroup>
      </Wrapper>
    </>
  );
};

export default EditTimelineItem;
