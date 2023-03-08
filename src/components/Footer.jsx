import React from 'react';
import '../styles/components/footer.scss';
import Logo from '../assets/document/logoTecnoPower.png';

export const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='main-container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-4 text-center align-middle col-container'>
            <img className='rounded-circle main-logo' alt='171x180' src={Logo}></img>
          </div>

          <div className='col-lg-2 col-sm-4 text-center align-middle'>
            <img
              className='rounded-circle circle'
              alt='171x180'
              src='https://media.licdn.com/dms/image/D5603AQGR7ZPTAQvh9w/profile-displayphoto-shrink_400_400/0/1665088793878?e=1683158400&v=beta&t=_vKmIevoFEh6Ai-Hx5cEXpqpqWxe-qq3OfX95_S43CQ'></img>
            <div className='row'>
              <div className='col-md-12 text-center name'>Jeisson Gavilán</div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <a href='https://www.linkedin.com/in/jeisson-alexander/' target='_blank'>
                  <img
                    className='rounded-circle logo1'
                    alt='Logo LinkedIng'
                    src='https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png'></img>
                </a>
              </div>
              <div className='col-6'>
                <a href='https://github.com/Alexander206' target='_blank'>
                  <img
                    className='rounded-circle logo2'
                    alt='Logo GitHub'
                    src='https://git-scm.com/images/logos/downloads/Git-Icon-White.png'></img>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-sm-4 text-center align-middle'>
            <img
              className='rounded-circle circle'
              alt='171x180'
              src='https://lh3.googleusercontent.com/a/AGNmyxZgfEKpYKuQMPqK5Ub2QI4qlMmh5u8XzNLJtHtMnQ=s192-c-mo'></img>
            <div className='row'>
              <div className='col-md-12 text-center name'>Wendy Carlos</div>
            </div>
            <div className='row'>
              <div className='col-6'>
                <a href='https://www.linkedin.com/in/wendy-alejandra-carlos-mu%C3%B1oz/' target='_blank'>
                  <img
                    className='rounded-circle logo1'
                    alt='Logo LinkedIng'
                    src='https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png'></img>
                </a>
              </div>
              <div className='col-6'>
                <a href='https://github.com/wenaleja' target='_blank'>
                  <img
                    className='rounded-circle logo2'
                    alt='Logo GitHub'
                    src='https://git-scm.com/images/logos/downloads/Git-Icon-White.png'></img>
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-2 col-sm-4 text-center align-middle'>
            <img
              className='rounded-circle circle'
              alt='171x180'
              src='https://media.licdn.com/dms/image/D4E03AQGpfbkQ0eO1OA/profile-displayphoto-shrink_400_400/0/1675216052678?e=1683158400&v=beta&t=lpzIH-WmTE4nxlcO8TNvXpgypQPkj9be8w1IFHSKTjA'></img>
            <div className='row'>
              <div className='col-md-12 text-center name'>Adriana Moreno</div>
            </div>
            <div className='row'>
              <div className='col-6 text-center'>
                <a href='https://www.linkedin.com/in/adrianamorenogutierrez/' target='_blank'>
                  <img
                    className='rounded-circle logo1'
                    alt='Logo LinkedIn'
                    src='https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png'></img>
                </a>
              </div>
              <div className='col-6 text-center'>
                <a href='https://github.com/soyadrianamorenogutierrez' target='_blank'>
                  <img
                    className='rounded-circle logo2'
                    alt='Logo GitHub'
                    src='https://git-scm.com/images/logos/downloads/Git-Icon-White.png'></img>
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-2 col-sm-4 text-center align-middle'>
            <img
              className='rounded-circle circle'
              alt='171x180'
              src='https://media.licdn.com/dms/image/D4E03AQHr-po9BKVF4g/profile-displayphoto-shrink_800_800/0/1675461674838?e=1683158400&v=beta&t=FEOMfrFGe6jLowOPNCUYVKlsrOH4kWzPdVTLZOj92YA'></img>
            <div className='row'>
              <div className='col-md-12 text-center name'>Eleiza Caridad</div>
            </div>
            <div className='row'>
              <div className='col-6 text-center'>
                <a href='https://www.linkedin.com/in/eleiza-caridad/' target='_blank'>
                  <img
                    className='rounded-circle logo1'
                    alt='Logo LinkedIn'
                    src='https://www.citypng.com/public/uploads/preview/linkedin-square-white-icon-transparent-png-11640440452zi2ykndpw2.png'></img>
                </a>
              </div>
              <div className='col-6 text-center'>
                <a href='https://github.com/eleizac' target='_blank'>
                  <img
                    className='rounded-circle logo2'
                    alt='Logo GitHub'
                    src='https://git-scm.com/images/logos/downloads/Git-Icon-White.png'></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
