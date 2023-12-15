import { useState } from 'react';
import DescriptionLesson from 'common/descriptionLesson/DescriptionLesson';
import NavbarLesson from 'components/lesson/navbarLesson/NavbarLesson';
import { TEXT } from 'helpers/text';


const ExerciseDescription = () => {
  const [editorContent, setEditorContent] = useState(TEXT);
  // const handleEditorChange = (content: string) => {
  //   setEditorContent(content);
  // };
  return (
    <>
      <NavbarLesson>
      </NavbarLesson>
      <DescriptionLesson text={editorContent} />
    </>
  );
};

export default ExerciseDescription;
