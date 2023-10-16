import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { ActionButtons, CommonButton, NumberField, TextArea, TextField } from '@/components';
import { usePosProviderConfig } from '@/context';
import { useTranslation } from '@/hooks';
import { PosProvider } from '@/models/portfolio';
import { DialogActions } from '@/models/commons';

interface FormValues extends PosProvider {}

interface Props {
  initialValues?: PosProvider;
}

export const PosProviderForm: FC<Props> = ({ initialValues }) => {
  const { t } = useTranslation();
  const { selectedItem, actions } = usePosProviderConfig();
  const isUpdate = !!initialValues?.id;

  const form = useForm<FormValues>({
    defaultValues: {
      name: initialValues?.name || '',
      description: initialValues?.description || '',
      commission: initialValues?.commission || 0,
    },
  });

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = form;

  useEffect(() => {
    isUpdate ? reset(selectedItem) : reset();
  }, [initialValues]);

  const onSubmit = (values: FormValues) => {
    if (isUpdate) {
      actions?.updateOne({ ...selectedItem, ...values });
    } else {
      actions?.createOne(values);
    }
  };

  const entityName = t('portfolio.posProviderConfig.entityName');

  const formButtons: CommonButton[] = [
    {
      label: t('components.button.cancel'),
      type: 'cancel',
      onClick: () => actions?.toggleDialogAction(isUpdate ? DialogActions.UPDATE : DialogActions.CREATE),
    },
    {
      label: t(`catalog.actions.${isUpdate ? 'update' : 'create'}`, { entityName }),
      type: 'primary',
      onClick: handleSubmit(onSubmit),
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          name="name"
          label={t('catalog.fields.name')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <NumberField
          name="commision"
          label={t('portfolio.posProviderConfig.labels.commission')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
            min: {
              value: 0,
              message: t('portfolio.posProviderConfig.validations.commissionRangeValue'),
            },
            max: {
              value: 100,
              message: t('portfolio.posProviderConfig.validations.commissionRangeValue'),
            },
          }}
          min={0}
          max={100}
        />
      </Grid>

      <Grid item xs={12}>
        <TextArea
          rows={2}
          name="description"
          label={t('catalog.fields.description')}
          errors={errors}
          control={control}
          rules={{
            required: t('formValidationsErrors.requiredErrorLabel'),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <ActionButtons buttons={formButtons} containerProps={{ mt: 0 }} />
      </Grid>
    </Grid>
  );
};
