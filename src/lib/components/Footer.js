import Link from "next/link";
import React from "react";

const Footer = () => {
  let link1 = [
    {
      name: 'Education Board result',
      link: 'http://www.educationboardresults.gov.bd',
    },
    {
      name: 'Dhaka Education Board',
      link: 'https://dhakaeducationboard.portal.gov.bd',
    },
    {
      name: 'Directorate of Secondary and Higher Education',
      link: 'https://dshe.gov.bd/',
    },
    {
      name: 'Bangladesh Madrasah Education Board',
      link: 'https://bmeb.gov.bd/',
    },
    {
      name: 'Directorate of primary education',
      link: 'https://dpe.gov.bd/',
    },
    {
      name: 'Ministry of Primary and Mass Education',
      link: 'https://mopme.gov.bd/',
    },
    {
      name: 'Ministry of Education',
      link: 'https://moedu.gov.bd/',
    },
  ]
  let link2 = [
    {
      name: 'National Curriculum & Textbook Board',
      link: 'https://nctb.gov.bd/',
    },
    {
      name: 'Bangladesh Bureau of Educational Information and Statistics',
      link: 'https://banbeis.gov.bd/',
    },
    {
      name: 'National Academy for Educational Management',
      link: 'https://naem.gov.bd/',
    },
    {
      name: 'Ministry of Finance',
      link: 'https://mof.gov.bd/',
    },
    {
      name: 'University of Dhaka',
      link: 'https://www.du.ac.bd/',
    },

  ]
  return (
    <div className=" bg-gray-500 dark:bg-black grid md:grid-cols-3 p-3 ">
      <div className="mb-3  md:col-span-3">
        <h3 className="border-b border-b-white">AFZAL-AYAN MODEL HIGH SCHOOL</h3>
      </div>
      <div className="md:border-e border-e-white">
        <h4>Important link</h4>
        {
          link1?.map((item, i) => (
            <div key={i}>
              <Link
                className=" inline-block py-1 hover:text-blue-500 hover:underline transition-all"
                href={item.link} target="_blank">
                {item.name}
              </Link>
            </div>
          ))
        }

      </div>
      <div className=" md:border-e border-e-white ps-2">
        <h4>Important link</h4>
        {
          link2?.map((item, i) => (
            <div key={i}>
              <Link
                className=" inline-block py-1 hover:text-blue-500 hover:underline transition-all"
                href={item.link} target="_blank">
                {item.name}
              </Link>
            </div>
          ))
        }

      </div>
      <div className="mb-1 ps-2">
        <h4>Address</h4>
        <p>Charpara Bazar</p>
        <p>Delduar, Tangail</p>
        <p>Mobile: +8801778471190</p>
        <p>email: afzal.hosen57@yahoo.com</p>
        <p>Website: https://afzal-ayanmodelhighschool.vercel.app</p>
      </div>
      {/* <h4 className=" p-3">All rights preserved by MainulTech </h4> */}
    </div>
  );
};

export default Footer;
