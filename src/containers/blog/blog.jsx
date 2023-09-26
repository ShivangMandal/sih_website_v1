import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">There are lots of Important law out there, <br /> We are making it simple to understand.</h1>
      <h2 className="gradient__text">Making it easy to understand the law, <br /> Read our blog now!!   .</h2>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
       <a href='https://jils.blog/2021/04/11/parenthood-and-a-childs-right-to-knowledge-of-genetic-origins/' ><Article imgUrl={blog01} date="APRIL 11, 2021" authName="By Shreya Jaipuria"
        text="Parenthood and a Child's Right to Knowledge of Genetic Origins" conText=" Introduction With increasing recognition of right to knowledge of genetic origins of a child, some authors, such as Bainham, have focused on the distinction between ‘genetic’ and ‘social’ parenthood. The ‘genetic parent’ is one that has a genetic connection with the child, but may not be caring for that child. For example, …" /></a>
      </div>


      <div className="gpt3__blog-container_groupB">

       <a href='https://jils.blog/2020/08/05/minors-right-to-protest-balancing-rights-and-restrictions/'> 
       <Article i
       imgUrl={blog02}
       date="AUGUST 05, 2020" 
       authName="By Kavya Arora" 
       text="Minor’s Right to Protest : Balancing Rights and Restrictions" 
       conText="Introduction ‘Protest is a form of individual or collective action aimed at expressing ideas, views or values of dissent, opposition or denunciation’. Examples include ..."
       /></a>

      <a href='https://jils.blog/2022/06/21/addressing-the-gaps-in-indias-child-protection-laws-safeguarding-children-from-online-grooming/'>
     <Article 
      imgUrl={blog03} 
      authName="By Avanti Deshpande" 
      date="Sep 26, 2021" 
      text="Addressing the Gaps in India’s Child Protection Laws: Safeguarding Children from Online ‘Grooming’" 
      conText="Introduction With the onset of the COVID-19 pandemic, the use of the internet, online services, and social media sites has increased substantially, not only among adults but..."
      /></a>


     <Article
         imgUrl={blog04} 
         date="Sep 26, 2021" 
         text="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
     />  

     <Article
         imgUrl={blog05} 
         date="Sep 26, 2021" 
         text="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
     />        
        
     <Article
         imgUrl={blog04} 
         date="Sep 26, 2021" 
         text="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
     />
        
   

      </div>
    </div>
  </div>
);

export default Blog;