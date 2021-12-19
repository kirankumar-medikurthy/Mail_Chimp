import React from "react";
import { Switch, Route } from "react-router-dom";
import CRM from "../components/CRM/CRM";
import LandingPage from "../components/landing_page/LandingPage";
import { Page4 } from "../components/Pricing/Page4";
import { Signup3 } from "../components/signup/Singup3";
import { Signup4 } from "../components/signup/Signup4";
import Account from "../components/signup_shantanu/account";
import { Signup5 } from "../components/signup/Signup5";
import { Signup6 } from "../components/signup/Signup6";
import Dashboard from "../components/Dashboard/Dashboard";
import ImportContact from "../components/ImportContact/ImportContact";
import ChooseMethod from "../components/ChooseMethod/ChooseMethod";
import Organize from "../components/landing_page/Organize";
import Contacts from "../components/landing_page/Contacts";
import Match from "../components/landing_page/Match";
import Complete from "../components/landing_page/Complete";
import Success from "../components/landing_page/Success";

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/features/crm" exact>
          <CRM />
        </Route>
        <Route path="/pricing/marketing" exact>
          <Page4 />
        </Route>
        <Route path="/signup" exact>
          <Signup3 />
        </Route>
        <Route path="/signup/accountsetup" exact>
          <Signup4 />
        </Route>
        <Route path="/signup/address" exact>
          <Account />
        </Route>
        <Route path="/signup/contacts" exact>
          <Signup5 />
        </Route>
        <Route path="/signup/customize" exact>
          <Signup6 />
        </Route>
        <Route path="/dashboard/page/:type" exact>
          <Dashboard />
        </Route>
        <Route path="/dashboard/choosemethod" exact>
          <ChooseMethod />
        </Route>
        <Route path="/dashboard/import" exact>
          <ImportContact />
        </Route>
        <Route path="/dashboard/organise" exact>
          <Organize />
        </Route>
        <Route path="/dashboard/tag" exact>
          <Contacts />
        </Route>
        <Route path="/dashboard/match" exact>
          <Match />
        </Route>
        <Route path="/dashboard/complete" exact>
          <Complete />
        </Route>
        <Route path="/dashboard/complete/success" exact>
          <Success />
        </Route>
      </Switch>
    </div>
  );
};

export default AppRoutes;
