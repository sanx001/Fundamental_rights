import LoadingScreen from './components/LoadingScreen';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import RightToEquality from './components/RightToEquality';
import RightToFreedom from './components/RightToFreedom';
import RightAgainstExploitation from './components/RightAgainstExploitation';
import RightToFreedomOfReligion from './components/RightToFreedomOfReligion';
import CulturalAndEducationalRights from './components/CulturalAndEducationalRights';
import RightToConstitutionalRemedies from './components/RightToConstitutionalRemedies';
import RightsVsDuties from './components/RightsVsDuties';
import QuizSection from './components/QuizSection';
import KnowYourRights from './components/KnowYourRights';
import TimelineSection from './\components/TimelineSection';
import AboutIndiaSection from './components/AboutIndiaSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <MouseGlow />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <IntroductionSection />
        <RightToEquality />
        <RightToFreedom />
        <RightAgainstExploitation />
        <RightToFreedomOfReligion />
        <CulturalAndEducationalRights />
        <RightToConstitutionalRemedies />
        <RightsVsDuties />
        <QuizSection />
        <KnowYourRights />
        <TimelineSection />
        <AboutIndiaSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
