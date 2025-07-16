import '../styling/analytics.css';
import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import { useThemeContext } from '../context/theme';
import { useCookiesContext } from '../context/cookies';
import TunnelGraph from '../components/analytics/tunnel';
import { Card,Section } from '../components/analytics/Card';
import { PageForm, RequestForm } from '../components/analytics/Form';
import { Login } from '../components/analytics/Login';
import { CookieBar } from '../components/cookierequest';
import { CH1, H1, P } from '../components/StyledComponents';
import { useFacebookContext } from '../context/facebook';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Posts } from '../components/analytics/Posts';
import { PageSelector } from '../components/analytics/pageselector';
import { DateRange } from '../components/analytics/DatePicker';
import { Facebook } from '../components/analytics/Facebook';
//import { LoginSocialFacebook } from 'reactjs-social-login';
//import facebook

ChartJS.register(ArcElement);

export const Analytics = ()=> {
    const [analyticsFilter,setAnalyticsFilter]=useState()
    const facebook = useFacebookContext()
    const [page,setPage]=useState()


    const pieData={
        labels: ['Red', 'Yello', 'Purple', 'Blue'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
              '#EA4335',
              '#FBBC04',
              '#D00DAC',
              '#1877F2',
            ],
            borderWidth: 0,
          },
        ],
      }
      useEffect(()=>{console.log(facebook)},[facebook])
      const bool =true
      const style=()=>{
        return(
            'yellow'
        )
      }
    return (
        <>

            <section>
                <H1>{facebook.user ? 'Hi '+facebook.user.first_name: 'Welcome'}</H1>
                <P>This is an experimental Analytics platform. It makes interactions with the Facebook Graph to display insights on page performance.</P>
            </section>
            <Facebook/>
            <Card>
        <Section>
        <aside>
            <CH1>Website visitors origin</CH1>
        </aside>
        <section>
            <Doughnut data={pieData}/>
      </section>
      </Section>
    </Card>
              <CookieBar/>
        </>
    );
}