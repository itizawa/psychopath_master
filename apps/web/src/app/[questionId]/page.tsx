import { Stack } from '@mui/material';
import { notFound } from 'next/navigation';
import { getQuestion } from '~/actions/question';
import { AnswerBottomInput } from '../../components/models/AnswerBottomInput';
import { PostList } from '../../components/models/post/PostList';
import { QuestionInformation } from '../../components/models/question/QuestionInformation';

type Props = { params: Promise<{ questionId: string }> };

export default async function Page({ params }: Props) {
  const { questionId } = await params;
  const question = await getQuestion({ id: questionId });
  if (!question) return notFound();

  return (
    <Stack px={1} rowGap={5}>
      <QuestionInformation question={question} />
      <PostList questionId={questionId} />
      <AnswerBottomInput questionId={questionId} />
    </Stack>
  );
}
