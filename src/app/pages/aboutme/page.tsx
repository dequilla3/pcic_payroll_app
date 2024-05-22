"use client";

import { PageHeaderTitle } from "@/app/components/custom-components/PageHeaderTitle";
import Tabs from "@/app/components/custom-components/Tabs";
import DailyTimeRecord from "@/app/components/forms/aboutme/DailyTimeRecord";
import LeaveBalances from "@/app/components/forms/aboutme/LeaveBalances";
import PersonalInfo from "@/app/components/forms/aboutme/personalinfo";

function AboutMe() {
  const tabs = [
    { title: "Personal Info", isClicked: true, content: PersonalInfo },
    { title: "Daily Time Record", isClicked: false, content: DailyTimeRecord },
    { title: "Leave Balance", isClicked: false, content: LeaveBalances },
  ];

  return (
    <main>
      <PageHeaderTitle title="About Me" />
      <Tabs initialTabs={tabs} />
    </main>
  );
}

export default AboutMe;
