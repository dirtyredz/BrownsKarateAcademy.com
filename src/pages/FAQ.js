import React, { Component }  from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import * as Colors from '../utils/colors'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

class FaqPage extends Component {
  handleClick(index) {
    QuestionsAndAnswers[index].Show = !QuestionsAndAnswers[index].Show;
    this.forceUpdate();
  }

  render() {
    return (
      <Layout>
        <SEO title="FAQ" keywords={[`FAQ`, `react`]} />
        <Section

        >
        <Fade bottom cascade>
          <ul>
            {/* <TransitionGroup {...groupProps}> */}
              {QuestionsAndAnswers.map((QA, index) => (
                <ListItem key={`Q_A_${index}`} onClick={this.handleClick.bind(this,index)}>
                  <HoverMe><span>{QA.Q}</span></HoverMe>
                  {QA.Show && (
                    <Fade bottom>
                      <br/>
                      <LightGray >A.&nbsp;&nbsp;{QA.A}</LightGray>
                    </Fade>
                  )}
                </ListItem>
              ))}
            {/* </TransitionGroup> */}
          </ul>
          </Fade>
        </Section>
      </Layout>
    )
  }
}

export default FaqPage

const HoverMe = styled.div`
  cursor: pointer;
  padding: 2px;
  background-color: transparent;
  border-radius: 10px;

  &:hover {
    background-color: ${`rgba(${Colors.hexToRgb(Colors.DarkGrey)},0.3)`};
  }
`
const ListItem = styled.li`
  list-style:none;
  margin:0;
  padding: 0;
  padding-bottom: 30px;
  padding-left: 30px;
  position: relative;
  font-size: 90%;

  &:before{
    content: "Q";
    width:20px;
    height:20px;
    position: absolute;
    left: 0;
  }
`

const LightGray = styled.span`
  color: ${Colors.Green};
`

const QuestionsAndAnswers = [
  {
    Q: "My child is already wild, and sometimes even violent.  Won’t teaching them how to punch and kick only give them more tools to act this way and possibly hurt others?",
    A: "No! Our Martial Arts Classes focus first on self control and respect, along with many other concepts that almost always improve overall behavior. We teach our students that to act “like a Black Belt” you must NEVER use your techniques outside of class."
  },
  {
    Q: "Karate is so violent. It’s just about beating people up.",
    A: "In fact, Karate is just the opposite. It is about learning how to NOT have to use violence."
  },
  {
    Q: "Isn’t Martial Arts about religion? I mean, all that bowing and meditation and stuff…",
    A: "Martial Arts is not about religion. Bowing is about respect, meditation is to clear your mind from all the ‘junk’ floating around in your head so you can be the most ready to learn. We do not teach any religious material of any sort."
  },
  {
    Q: "I’m too old…",
    A: "Martial Arts is one physical activity that is truly timeless. Masters train into their 90’s and beyond. It is very beneficial to keep your body in motion, and doing Martial Arts is a great way to keep active at all ages. We’ve even had students in their 70’s!"
  },
  {
    Q: "I’m too out of shape, or I have a bad back, knee, etc…",
    A: "We have many ways to adapt our curriculum to all fitness levels and to accommodate many physical limitations. Many tournaments these days are even including an adaptive division! As long as you let us know what ails you, we can accommodate you in a way that you will still get the benefits of our classes. Often, doing our Martial Arts can strengthen your core and muscles around your joints, which can help you feel better. And, doing Martial Arts is a great way to GET into shape!"
  },
  {
    Q: "My child is too young.",
    A: "We have classes for children as young as 3 years old. Learn about our Mini Warriors curriculum."
  },
  {
    Q: "I don’t want my child to beat up other kids.",
    A: "One of the first things we discuss with our young students is the ‘4 Rules of BKA.’ One of them is to not use their karate outside of class. We make it a high priority to continually teach your children NOT to use what they learn, and we work with you to ensure they follow this very important rule."
  },
  {
    Q: "I don’t have time.",
    A: "We have an extremely flexible schedule, and will work with you to find classes that will fit your schedule. We even offer private lessons!"
  },
  {
    Q: "It’s too hard, I can’t learn all that stuff.",
    A: "Your mind is a muscle; the more you use it, the better it works! Being a student is hard sometimes, but we have many different teaching methods that we can use to reach all our students, no matter their learning style. And if you need extra help, the instructors and other students are always willing to help!"
  },
  {
    Q: "I’m too uncoordinated to do karate.",
    A: "You’re in luck! Karate is great at helping to improve coordination! We realize that not everyone is a natural born athlete, and that each individual will learn in their own way, on their own time. We will help by encouraging you to succeed at your very best, and help you to focus on PROGRESS, not perfection, along the way."
  },
  {
    Q: "My child is into sports, he doesn’t have time for this. Karate is not a real sport anyway!",
    A: "Karate is a real sport-it is individual much like wrestling, but we also strive to form a team mentality throughout our school. It is a physical activity that has many benefits such as improving agility, balance, reflexes, etc. that can serve to cross-train and improve your performance in other sports. For those who like to compete, we have opportunities for our students to compete in karate tournaments throughout the year. We also have a great opportunity for students who want more of a team type setting to join our Demo Team, where they will work with other students and participate in demonstrations and group competitions throughout the year."
  },
  {
    Q: "Is rank really important? I just saw some guy who had 5 – 12th Degree Black Belts, he must be REALLY awesome!",
    A: "When rank is attained through an education under a certified instructor, it guarantees that person holds an authentic rank, which is important when ‘shopping around’ for a martial arts school. (Think of it as a college professor who never received their own college degree!) There are many people who cannot give you information about their instructors, and yet others who create their own ranks and falsify information or create their own styles and some even actually promote themselves. 10th Degree is the highest legitimate rank in any Martial Art, and there are only a handful of LEGITIMATE 10th Degrees in the world. Do your homework and don’t fall for the imposters."
  },
  {
    Q: "Isn’t this Tae Kwon Do?",
    A: "No. Tae Kwon Do is a sport oriented style of martial arts, and a heavy focus of their style is competition. (Think high kicks and board breaking.) Our style focuses on real-world applications. (Think Samurai.) We kick mostly below chest height and do not require board breaking (but we do on occasion teach students to break boards if they want to learn for use in demonstrations, etc.)"
  },
  {
    Q: "Don’t you have to go overseas to learn ‘Real Martial Arts’?",
    A: "It is true that no traditional style of Martial Arts originated in the USA. It would be really nice if everyone who wanted to earn a Black Belt could go to Japan or China or somewhere really great for a couple years and train under the top Master in the style. But that is unrealistic. Fortunately, there are many incredible, qualified and highly skilled martial artists who have been fortunate enough to train directly under these top Masters, who have brought their knowledge to the USA, and give us the opportunity to learn these traditional forms of Martial Arts here. Going overseas is a great tool in your martial arts training, to learn about the cultures and origins of your Martial Arts, and if you are lucky, to be able to meet and even train for a few hours or days with some of these Masters. But if you are unable to take advantage of these opportunities, do not feel your training is any less legitimate!"
  },
  {
    Q: "It takes too long to earn a Black Belt!",
    A: "In our style, you could earn your Black Belt in as little as 2 years! Don’t forget that it’s not about the destination, it’s about the journey!"
  },
  {
    Q: "It’s too expensive, I can’t afford it.",
    A: "We work very hard to make your training affordable. We have many different payment plans and options, as well as family and other discounts. We are willing to work with you to try to fit your training into your budget. Just ask!"
  },
  {
    Q: "Do I have to start at a certain time of year?",
    A: "No. Our classes run year-round, and we accept new students at any time. Our curriculum is set up in such a way that new students can jump in at any time and instantly be right on their path to becoming a Black Belt!"
  },
  {
    Q: "What if I go on vacation or need to take some time off?",
    A: "We are extremely flexible. We can put your membership on hold, and you can pick back up where you left off when you get back. Now this does not mean that we will extend your classes if you just get lazy and decide to play hookie for a while. But for any legitimate reason, we are completely open to working with you."
  },
  {
    Q: "Will I be able to do all those cool things like Jet Li, Jackie Chan, and the Ninja Turtles?",
    A: "Great question. Yes, but only if you train your Martial Arts like crazy for many years, go to stunt man school, then get a production crew to choreograph your life and film it so as to remove all the not so awesome parts! 😉"
  },
  {
    Q: "Can you help me channel my inner Chuck Norris?",
    A: "Everyone wants to be like Chuck Norris. After all, Chuck Norris can slam a revolving door! But seriously, Chuck Norris started his martial arts training while a young man in the Air Force. He developed a deep passion for it, and his intensive training led to an incredible fight record, major karate achievement awards, and a hugely successful acting career. He worked extremely hard to achieve his goals in the martial arts, and at over 70 years old, still in amazing shape, Chuck Norris is a great example of what a person can achieve when they put their mind and body into reaching their goals! Martial Arts can open many doors if you work hard enough!!"
  },
  {
    Q: "Do you do ‘real karate’? That stuff would never work in real life!",
    A: "Yes, we do REAL karate. The origins of our style of Martial Arts come from the Emperor’s Guards who really were defending life and limb. Everything we do has a use and purpose, and works in real life. *A word of advice, don’t ask Sensei to show you unless you are prepared to be his demonstration assistant!! Lol!"
  },
  {
    Q: "Will I get to use ‘numchucks’???",
    A: "You must be referring to the weapon called the nunchaku. Yes, if you chose to take the weapons class, you will learn how to use them, along with many other traditional Okinawan weapons!"
  },
  {
    Q: "Once I get my Black Belt, I will know it all, right? What else is there?",
    A: "In the Martial Arts, like most anything else in life, the more you know, the more you realize that you don’t know. Becoming a Black Belt is often the primary focus for many people. However, it doesn’t end there. Training in the Martial Arts gives you a never-ending amount of information that you can learn. For many people it becomes a lifelong endeavor."
  },
  {
    Q: "I have more questions, now what?",
    A: "Just contact us, and we can answer any of your questions!"
  }
]
