import { Typography, Divider } from '@mui/material';

import useForm from '@/helpers/useForm';

import Field from '@/containers/Field';
import Icon from '@/components/Icon';
import { Wrapper, InputWrapper, IconGroup, IconWrapper } from './styled';
import data from './data';

const EditTimelineItem = () => {
  const isSubmit = false;
  const isReset = false;
  const type = 'work';

  const onSubmit = () => {
    console.log('submit');
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
              isReset={isReset}
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
