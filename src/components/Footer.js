const Footer = () => {
   const year = new Date().getFullYear();
   return (
     <div className="footer">
       Created By
       <i className="fa fa-heart"></i>
       <a
         href="https://www.linkedin.com/in/ashish-rautela-731227212/"
         target="_blank"
         title="Ashish Rautela's Linkedin Profile"
       >
         Ashish Rautela
       </a>
       <i className="fa fa-copyright"></i>
         {year}
         <strong>
           Food<span>Fire</span>
         </strong>
     </div>
   );
 };
 
 export default Footer;
