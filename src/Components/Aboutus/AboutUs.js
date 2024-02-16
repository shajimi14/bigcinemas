import Navbar from "../Navbar/Navbar";
import "./AboutUs.css"

export default function AboutUs(){
    return(
        <div className="App AboutUsBG">
            <Navbar/>
            <section className="AboutUs z-index mt-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-12">
                                <div className="no-paddingtop">
                                    <div className="header-holder same-ratio no-padding">
                                        <div className="left elements">
                                            <h2 className="heading text-uppercase">About Us</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="text-content">
                                        <p>Welcome to BIG CINEMAS, the largest and the most premium film exhibitor in India with 1712 screens across 113 cities (India and Sri Lanka) with 359 properties and an aggregate seating capacity of 3.58 lakh seats. Over the years, we have consistently increased our screen count, both organically and inorganically, through strategic investments and acquisitions which includes ‘Cinemax Cinemas’ in November 2012, ‘DT Cinemas’ in May 2016, ‘SPI Cinemas’ in August 2018. We recently completed the merger with INOX Leisure Limited, which has added to our storied history of becoming game changers in the film exhibition industry for over 25 years and transforming the out of home entertainment in the country.</p>
                                            <p>Our mission is to advance and reimagine the movie-going experience by continuing to reinvent ourselves in keeping up with the times and the ever-changing entertainment landscape to make our brand aspirational and accessible. We take pride in our strategically located cinemas and we continuously invest in introducing premium formats, comfortable seating, sound, projection, ambience, and food &amp; beverage to meet evolving consumer expectations so that our patrons have a memorable experience every time they visit our cinemas.</p>
                                                <p>We serve as a conduit between consumers and the film industry on one hand and the retail industry and real estate development on the other. As a leading player in the film exhibition industry, our company is spearheading the establishment of a robust ecosystem that brings together key partners, including filmmakers, studios, content providers, equipment and concession manufacturers, data and technology companies, all of whom rely on the strength of our business and the communities we serve. We engage with multiple channels to connect with our over 180 million patrons through research, loyalty, online, digital, and offline modes to provide a platform to showcase film and non-film content and identifying new trends in the film exhibition industry.</p>
                                                    <p>Our diversified revenue stream comes mainly from box office and non-box office, which primarily includes revenue from Sale of Food and Beverages, advertisement income, convenience fees, and income from movie distribution, among others. Our leadership across key operating metrics and robust financial position is backed by experienced Promoters, Key Managerial Personnel, and a senior management team with an established track record.</p>
                                                        <p>Thank you for choosing BIG Cinemas Limited for your entertainment needs. We look forward to welcoming you to our cinemas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}