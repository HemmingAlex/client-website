import React, { Component } from 'react';
import {Container} from "reactstrap";
import Style from "./Fiction.module.scss";
  import Nav from "../components/Navbars/BlogNav"; 

import Foot from "../components/Footers/DarkFooter";


const Blog =() => {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
      
  
  return (
  
 
            <div>
                <Nav/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container className={Style.tbody}> 
            
                   <div className={Style.s}> <h2 className={Style.centre}> <strong>Interview</strong></h2></div>
                    <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                    
                    
                    <br/><hr/>
                    <strong><div className={Style.s}>When did you first start writing fiction?</div></strong>
            <div>&nbsp;</div>
            <div>My mom says in the first grade with a dinosaur book. I was probably eleven when I wrote a story about a man guarding a wall at a mountain pass. He was no one special. The kind of character that dies in the background where the hero prevails. I did not write again for decades after that even though I would read a lot. Too busy working and chasing girls.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>What kind of books do you enjoy reading? Paper or eBook?</div>
            <div>&nbsp;</div>
            <div>I grew up going into a bookstore and running my hand down the spines of books. If it had TOR or fantasy for published the book was removed and the back read. As time shifted, so did I. I moved to tablet reading and from 2010- 2019 would consume a few books a week at minimum. My taste has always been science fiction or fantasy. The fields within these categories have never been narrow with my tastes.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>What&rsquo;s your favorite under-appreciated LitRPG novel?</div>
            <div>&nbsp;</div>
            <div>The Sanctuary Series by Robert J&nbsp; Crane - This series had it all for me. The feels, the angst, the thrill, and the blood. Missing sex but that is okay!</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Of your books, which is your personal favorite? Why?</div>
            <div>&nbsp;</div>
            <div>Right now as of Feb 8 2020 I would say Logan. As a person and a writer, I try to grow. Why should I not work on improving my grammar, word choices, and story banter? I laughed a lot writing Logan and it did not feel forced. I guess I would say it is my most proud work. My personal favorite is Gryff because I never expected to sell a single copy. I still chuckle at my wife saying. &lsquo;Honey you got a review. Who is that guy?&rsquo; and me turn to her &lsquo;How the hell should I know?&rsquo; the look on her face was priceless. Oh, you did not have help. Hmm.</div>
            <div>&nbsp;</div>
            <div className={Style.s}>You can make one LitRPG book (not your own) a movie. Which is it and why?</div>
            <div>&nbsp;</div>
            <div>Shadow Sun - Dave Wilmarth. For a few reasons. The books are vivid and fun. The story is unique and thrilling. There might be some CGI issues but nothing tech today could not handle.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Do you believe in writer's block?</div>
            <div>&nbsp;</div>
            <div>Certainly do. Words are hard mkay. My biggest blocks are names. Back when I tried writing again a decade I would stagnate, get stuck, and then give up when I hit a name I could not decide on. Now I have learned - F that. I will literally write BYE FELICIA and then replace it all when a name comes to me. As for story block that is covered later.&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Are you an outliner or pantser?</div>
            <div>&nbsp;</div>
            <div>I flew helicopters. Woot! Surprisingly flying multimillion-dollar toys is super serious stuff and very boring for the pilot after the new blade smell vanishes. I fly by the seat of my pants baby. Yank and Bank!&nbsp;</div>
            <div>I tried to outline and failed at it over and over. I would write chapters with subplots and dialogue sequences all planned out. Yeah&hellip; Screw that. When Bobby reacts to a subtle hint from Ricky in the text the whole chapter is thrown off the outline. My thing is I have a book idea. Gryff is a guy out of his element stuck on a world that is relatable yet foreign. Then I write what he would experience. That is all. When I hit the midpoint mark I start thinking of an ending. So spoiler. Gryff 1 ends abruptly because I just kind of kept writing and did not think of an ending until a few days before.&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>What is your writing process like?</div>
            <div>&nbsp;</div>
            <div>This ties in above. I will include some photos. I go to Walmart on after school sale clearance and load up on ringed binders. With Gryff I printed every chapter and line-edited with red ink and pen. As you can imagine this was insanely tedious. I do catch more errors that way and would recommend the process to those on a budget. Gryff had like 8 edits or more and spoiler there was diminishing returns.</div>
            <div>&nbsp;</div>
            <div>Now, I write a chapter while notating the names on my binder for easy reference. I am looking at one now that my wife drew a penis on. Sigh. When I am done the chapter from start to what I feel is a good finish I go over it a second time. I run two spell checkers over the writing; google and grammarly. When that is done I move on until the book is complete. There is a final revision from start to finish to control name changes Barq became Barg and ensure the story flows. Then it is off to the editor.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>How many hours a day do you write?</div>
            <div>&nbsp;</div>
            <div>So I have 2 kids. 1 from a marriage that dissolved due to a deployment. 1 that is a wild 2-year-old. Since it is winter I work about 12 hours a day. Hence my crazy production rates. I slow on weekends and if there is something going on. I sure as hell am not watching Mickey Mouse for the eighty-seventh time and would rather work. My wife covers for me when we are in downtimes and I type out my passion.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Share a photo of your workspace and tell us about it?</div>
            <div>&nbsp;</div>
            <div>I commandeered my son&rsquo;s desk. I built a floating desk for him and then stole it when he was at his moms. When he is here, I sneak in and pretty much always wake him up. Poor guy. One day I will get a proper office. That is life though. Work with what you have, instead of waiting for the perfect scenario.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Who are some of your favorite authors of all time?</div>
            <div>&nbsp;</div>
            <div>Michael Crichton, Robert Jordan, BV Larson,&nbsp;&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Where do you get your ideas?</div>
            <div>&nbsp;</div>
            <div>I am a daydreamer in just about every imaginable place I can. I tend to think of someplace I would rather be. Let the story flow and do stuff I would have fun doing. This does not always translate to written words but it does produce some good ideas. Others are inspirational. Playing wow classic and riding a boring-ass griffin. Screw that, these things should be savage elitists.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>What are your thoughts on how VR will affect the future of humanity?</div>
            <div>&nbsp;</div>
            <div>Yes. Sign me up. Come visit me inside the fourth-generation built. You get lag inside one and three in case you were wondering. Getting old sucks and I want to cryo-freeze my brain to hang out with Bob.&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>What kind of research do you do, and how long do you spend researching before beginning a book?</div>
            <div>&nbsp;</div>
            <div>For Logan, I watched some videos on archery. I still got some stuff wrong. Youtube and google are my friends. Did you know making rope is stupid hard? There is a lot of medieval stuff I was like that sounds easy enough. Nope, turning guts into rope is not easy.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>First video game memory?&nbsp;</div>
            <div>Pong, Packman. Actually retro arcade games. I was very young when atari came out. I had every gaming system since. Use only the PC now. I hate controllers.</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>What can fans expect from you next?</div>
            <div>&nbsp;</div>
            <div>Fans is a generous word. My readers should expect more kickass books. My goals are to finish off my Logan series, ⅓ done that now as of writing this. Then Gryff will conclude. I do not plan to write an eighteen-book series but I also never know. As a reader I get turned off by book 5 or 6 is I do not see an end in sight.&nbsp;</div>
            <div>&nbsp;</div>
            <div>I am wanting to try a new series where there is more detail and the story is slower but in turn, you get more character depth.&nbsp;</div>
            <div>&nbsp;</div>
            <div className={Style.s}>Anything else you would like to add?</div>
            <div>&nbsp;</div>
            <div>I am here to write and to some extent help others write. I can help with the publishing side. A good place to find artists, which narrators to avoid, which editors to avoid, and how to handle advertising. If you ask me to look at your work I will give it a skim. This is absolutely one hundred percent not against you. I write seven days a week and do not even read books I want to anymore. A skim gives me a feel of your writing and lets me give you feedback. Hint. Hire a cheap editor on Fiverr and get some feedback from a professional. I did this and learned a bunch. I am a writer of stories. I am not an expert in grammar and I hope to improve that. Reach out to me if you do need help with a process or a story concept.&nbsp;&nbsp;</div>
            <div>&nbsp;</div></Container>
            
            <Foot/>
            </div>
  );
  
  };
  
  
  
  
  


export default Blog;
