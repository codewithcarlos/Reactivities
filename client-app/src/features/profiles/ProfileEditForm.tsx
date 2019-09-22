import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { combineValidators, isRequired } from 'revalidate';
import { Form, Button } from 'semantic-ui-react';
import { IProfile } from '../../app/models/profile';
import TextInput from '../../app/common/form/TextInput';
import TextAreaInput from '../../app/common/form/TextAreaInput';
import { observer } from 'mobx-react-lite';

const validate = combineValidators({
  displayName: isRequired('displayName')
});

interface IProps {
  updateProfile: (profile: IProfile) => void;
  profile: IProfile;
  setEditMode: (editMode: boolean) => void;
}

const ProfileEditForm: React.FC<IProps> = ({ updateProfile, profile, setEditMode }) => {
  return (
    <FinalForm
      validate={validate}
      initialValues={profile!}
      onSubmit={(e) => {
        setEditMode(false);
        updateProfile(e);
      }
      }
      render={({ handleSubmit, invalid, pristine, submitting }) => (
        <Form onSubmit={handleSubmit} error>
          <Field
            name="displayName"
            placeholder="Display Name"
            value={profile!.displayName}
            component={TextInput}
          />
          <Field
            name="bio"
            placeholder="Bio"
            rows={3}
            value={profile!.bio}
            component={TextAreaInput}
          />
          <Button
            loading={submitting}
            disabled={invalid || pristine}
            floated="right"
            positive
            type="submit"
            content="Update Profile"
          />
        </Form>
      )}
    />
  );
};

export default observer(ProfileEditForm);
