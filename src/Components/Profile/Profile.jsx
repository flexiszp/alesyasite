import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={s.item}>БИЗНЕС-КОНСУЛЬТАНТ ЗАПОРОЖЬЕ</div><br />

            Здравствуйте, уважаемые друзья!<br /><br />

            <div>К вашим услугам профессиональный специалист в социальной и бизнес сфере в Запорожье Герасименко Алеся Александровна. Предоставляю комплекс услуг физическим и юридическим лицам. Моя цель - защита прав и законных интересов граждан, предпринимателей, предприятий и организаций, повышение уровня правосознания жителей города Запорожье.
            Юридическая практика: В 2004 году профессиональная деятельность юриста  Емец Артема, началась с работы в органах нотариата, юридических и адвокатских фирмах различной направленности. Это принесло отличный опыт и практику - овладев знаниями гражданского, семейного, жилищного, административного, трудового, хозяйственного и других отраслей права, адвокат в Запорожье Емец А.Ю., решил помогать людям, оказывая юридические услуги.
            Образование: Совмещая работу и учебу, юрист  Емец А.Ю., добывал юридическое образование в Институте права им. В. Сташиса, а также в Запорожском национальном университете. В 2009 получил диплом по специальности «Правоведение».
            Человеку необходимо постоянно развиваться, поэтому адвокат в Запорожье продолжает учиться по сегодняшний день, посещая всевозможные курсы повышения квалификации, семинары, тренинги и т. п.</div><br /><br />

            
        <MyPosts />

        </div>



    )


}

export default Profile;
