import ExerciseContent from 'components/lesson/exerciseContent/ExerciseContent';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';


export default async function Home() {
  return (
    <main>
      <ClientProviders>
        <ExerciseContent/>
      </ClientProviders>
    </main>
  );
}
