import AboutMe from "../../components/AboutMe/AboutMe";
import HearoSection from "../../components/HeroSection/HearoSection";
import Layout from "../../layout";

const Home = () => {
    return (
        <Layout>
            <HearoSection />
            <AboutMe />
        </Layout>
    );
};

export default Home;
