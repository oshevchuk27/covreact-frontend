import PageContainer from "../../components/layout/PageContainer";
import "./faqs.css";

const Faq = () => {
  return (
    <PageContainer>
      <div className="faqcontainer">
        <h1>Frequently Asked Questions</h1>
        <ol>
          <li>
            Is the COVID-19 vaccine safe given that it was rapidly developed and
            tested?{" "}
          </li>
          <li>
            Is it true that the flu vaccine already helps protect me from
            COVID-19?
          </li>
          <li>
            Does it still make sense to get vaccinated against COVID-19 given
            that it has a rather high survival rate?
          </li>
          <li>
            Should I still get a vaccine if I already had COVID-19 and have
            recovered?
          </li>
          <li>
            Should I still wear a mask and practice social distancing after I
            get vaccinated for COVID-19?
          </li>
          <li>
            Can I suffer a fatal or severe allergic reaction to the vaccine?
            What should I do if I get one?
          </li>
          <li>Do COVID-19 vaccines cause infertility or miscarriage?</li>
          <li>Will COVID-19 vaccine alter my DNA?</li>
          <li>
            Is it true that COVID-19 vaccine was developed to control the
            general population either through microchip tracking or
            “nanotransducers” in our brain?
          </li>
          <li>
            Is it true that COVID-19 vaccine was developed using fetal tissue?
          </li>
        </ol>
      </div>
      <iframe
        title="foijo"
        src="https://webchat.botframework.com/embed/covax19-bot?s=iPTSOvafC8c.kM75Ku0sRTRaSgFO9CWFDFnTN0B98B6eF4PhcyCDMpk"
        className="bot"
      ></iframe>
    </PageContainer>
  );
};
export default Faq;
