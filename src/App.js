import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AboutView from './views/aboutView';
import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import ContactView from './views/contactView';
import DashboardView from './views/dashboardView';
import PasswordUpdateView from './views/passwordUpdateView';
import RestorePasswordView from './views/restorePasswordView';
import ScheduleView from './views/scheduleView';
import ScheduleCreateView from './views/schedule/scheduleCreateView';
import ScheduleDayView from './views/schedule/scheduleDayView';
import ScheduleListView from './views/schedule/scheduleListView';
import ScheduleMonthView from './views/schedule/scheduleMonthView';
import ScheduleUpdateView from './views/schedule/scheduleUpdateView';
import ScheduleWeekView from './views/schedule/scheduleWeekView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import TaskView from './views/taskView';
import TaskCreateView from './views/task/taskCreateView';
import TaskDetailsView from './views/task/taskDetailsView';
import TaskListView from './views/task/taskListView';
import TaskUpdateView from './views/task/taskUpdateView';
import WelcomeView from './views/welcomeView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/about" element={<AboutView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/contact" element={<ContactView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/schedule" element={<ScheduleView/>}/>
            <Route exact path="/schedule/create" element={<ScheduleCreateView/>}/>
            <Route exact path="/schedule/day/*">
              <Route path=":id" element={<ScheduleDayView/>}/>
            </Route>
            <Route exact path="/schedule/list" element={<ScheduleListView/>}/>
            <Route exact path="/schedule/month/*">
              <Route path=":id" element={<ScheduleMonthView/>}/>
            </Route>
            <Route exact path="/schedule/update/*">
              <Route path=":id" element={<ScheduleUpdateView/>}/>
            </Route>
            <Route exact path="/schedule/week/*">
              <Route path=":id" element={<ScheduleWeekView/>}/>
            </Route>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
            <Route exact path="/task" element={<TaskView/>}/>
            <Route exact path="/task/create" element={<TaskCreateView/>}/>
            <Route exact path="/task/details/*">
              <Route path=":id" element={<TaskDetailsView/>}/>
            </Route>
            <Route exact path="/task/list" element={<TaskListView/>}/>
            <Route exact path="/task/details/*" element={<TaskUpdateView/>}/>
        </Routes>
    </Router>
  );
}

export default App;
