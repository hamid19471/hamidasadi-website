import AboutMe from "../../components/AboutMe/AboutMe";
import Clients from "../../components/Clients/Clients";
import HearoSection from "../../components/HeroSection/HearoSection";
import Layout from "../../layout";

const Home = () => {
    return (
        <Layout>
            <HearoSection />
            <AboutMe />
            <Clients />
        </Layout>
    );
};

export default Home;
