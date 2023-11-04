import { Typography, Divider } from '@mui/material';

import { TimeNodeType } from '@/constants/types/api';
import useForm from '@/helpers/useForm';
import { usePostTimeNodeMutation } from '@/redux/apis/timeline';

import Field from '@/containers/Field';
import Icon from '@/components/Icon';
import { Wrapper, InputWrapper, IconGroup, IconWrapper } from './styled';
import data from './data';

const EditTimelineItem = () => {
  const [postTimeNode, result] = usePostTimeNodeMutation();
  const { isSuccess, isError } = result;
  const isSubmit = isSuccess || !isError;
  const type = 'work';

  const onSubmit = (data: TimeNodeType) => {
    postTimeNode(data);
  };

  const { errors, handleError, handleFormData, submitHandler } = useForm(
    data.fields,
    onSubmit,
    isSubmit,
  );

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
            <Icon key={idx} type={icon.type} />
          ))}
        </IconGroup>
      </Wrapper>
    </>
  );
};

export default EditTimelineItem;
