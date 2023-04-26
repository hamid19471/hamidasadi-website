import AboutMe from "../../components/AboutMe/AboutMe";
import Clients from "../../components/Clients/Clients";
import ContactMe from "../../components/ContactMe/ContactMe";
import Experiences from "../../components/Expreriences/Experiences";
import HearoSection from "../../components/HeroSection/HearoSection";
import Services from "../../components/Services/Services";
import Layout from "../../layout";

const Home = () => {
    return (
        <Layout>
            <HearoSection />
            <AboutMe />
            <Clients />
            <Experiences />
            <Services />
            <ContactMe />
        </Layout>
    );
};

export default Home;
