import ExerciseTestContent from 'components/lesson/exersiceTestContent/ExersiceTestContent';
import ClientProviders from 'components/providers/clientProviders/ClientProviders';


export default async function Home() {
  return (
    <main>
      <ClientProviders>
        <ExerciseTestContent />
      </ClientProviders>
    </main>
  );
}
