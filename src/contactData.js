import email from './assets/images/email.svg';
import phone from './assets/images/phone.svg';
import linkedin from './assets/images/linkedin.svg';
import facebook from './assets/images/facebook.svg';

export default [
  {
    title: 'facundo.ortiz@live.com',
    icon: email,
    handleClick: () => window.open('mailto:facundo.ortiz@live.com'),
  },
  {
    title: 'LinkedIn',
    icon: linkedin,
    handleClick: () => window.open('https://www.linkedin.com/in/facundo-ortiz-0727bb188/'),
  },
  {
    title: '+54 2284 470537',
    icon: phone,
    handleClick: () => window.open('https://wa.me/542284470537'),
  },
  {
    title: 'Facebook',
    icon: facebook,
    handleClick: () => window.open('https://www.facebook.com/foarctuinz'),
  },
];
