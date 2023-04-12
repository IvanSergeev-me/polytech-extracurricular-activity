import React from 'react';
import { render } from '@testing-library/react';
import SendApplicationForm from 'Components/ActivityInfo/SendApplicationForm/SendApplicationForm';
import { activityApplicationGlossary } from 'Models/ApplictationStatuses';
import { ActivityType } from 'Models/Activities';

test('Отрисовка кнопки с нужным заголовком', () => {

  const onClick = (status:string) =>{
    console.log(status);
  }
  const currentType = "community" as ActivityType;

  const neededLabel = 'Отменить заявку';
  const { getByText } = render(<SendApplicationForm 
    activityType={currentType} 
    communityId={0} 
    applicationGlossary={activityApplicationGlossary} 
    onAppStatusSubmit={onClick}/>);
  const buttonElement = getByText(neededLabel);
  expect(buttonElement).toBeInTheDocument();
});