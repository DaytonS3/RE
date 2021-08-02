import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Test.css'
export default class Testimonials extends Component {


    render() {
        const profilepic = "images/use3.png"
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>Sebastian Mettes</h3>

                        <p>
                            As a buyer in the 2021 market frenzy in Atlanta, having an agent that is organized, professional, extremely knowledgeable of both the market and of who to work with (financing, inspections, repairs, etc.), and exhibits confident that everything will work out is a necessity. Amber Steele is all of that and more. She navigated our schedules as out of state buyers with ease - providing 10+ showings in 1 weekend with only 2 days’ notice that we would be in Atlanta. She quickly understood our needs - so much so that we felt 100% confidence in moving forward and closing on a home after she provided us with a video tour of the home she found that would best meet our needs.

                            Amber went above and beyond at every opportunity and isn't afraid to get her hands dirty to get the job done. For example, rather than allowing us to overpay for a simple hole to be dug for inspection, she dug it herself, with a shovel.

                            Despite of numerous difficulties that came up during the closing process, Amber was always on top of it, confident that everything would work out... which it did!

                            Amber Steele is the absolute best real estate professional I have had the opportunity to work with - I hope to work with her again for our next home purchase, or sale!
                        </p>
                    </div>
                </div>

                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>Waleisah Wilson</h3>

                        <p>
                            I'm only giving a 4 not to reflect a lack of something  on Amber's part but only because I didn't finish the process to actually buy and was unable to witness her process expertise or negotiation skills but I'm sure if they are anything like her responsiveness, her professionalism and her willingness to pair you with properties of your preference, then I will not be disappointed when I contact her in 9 months to start the process over again.

                            I wanted to buy badly and contacted Amber and she got right on it with sending me houses within my budget that were to my liking but unfortunately because I was pressed for time to move before my current rental lease expired AND because I wanted another year to work on my credit and income to get a bigger budget, I decided to just rent for another year so I'll be more than prepared and qualified next year. Amber will definitely be my go to.
                        </p>
                    </div>
                </div>

                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>Daftney Dangerfield</h3>

                        <p>
                            Amber is very professional, prompt, friendly. I love her knowledge for first time home buyer. I absolutely loved her recommendation for lenders. This is my husband and I first time trying to buy a home and Amber has been awesome!
                        </p>
                    </div>
                </div>
                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>Carmen Moran</h3>

                        <p>
                            Amber is AMAZING! She will work with you until you find your DREAM home! Her hard work and and optimism helped me with any pushback and I was able to find my first home! I can’t thank her enough!
                        </p>
                    </div>
                </div>
                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>J Moreno</h3>

                        <p>
                            Me and my husband came to amber in order to purchase our FIRST home we had no clue how the home buying process was but amber made everything so easy for us she guided us step by step by keeping us updated on the home , answering any questions we had and checked in with us everyday from the moment we were approved to our offer being accepted , to us closing on our house . I would recommend amber to anyone looking to purchase a home she will make your home buying experience very pleasant !
                        </p>
                    </div>
                </div>
                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>Alicia Pierce</h3>

                        <p>
                            She was awesome she knew her job,and was very friendly and quick to get me in to see a house. I bought my house off of one of her sales.she got me into my house a week early.i would recommend her to anyone looking for a realtor
                        </p>
                    </div>
                </div>
                <div>

                    <div className="myCarousel">
                        <h3 style={{ color: "#b08f26" }}>Wilber Tejada-Martinez</h3>

                        <p>
                            Extremely helpful! Great to work with and is mindful on what the buyer wants and is looking for. I definitely recommend contacting her if you are looking to buy a home!
                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}