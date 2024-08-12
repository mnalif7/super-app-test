# super-app-test

## Steps to run Assignment 1
1. npm install
2. appium (start your appium server, should be on port 4723)
3. Start Android Emulator. (This project use Android Studio Emulator, if can, change your emulator id to emulator-5554, otherwise you need to set in wdio.conf.android.ts under capabilities section)
4. npm run wdio-android for assignment 1

## Steps to run Assignment 2
1. npm run wdio-chrome for assignment 2


# NOTES on the code development and assignment

1. I am not focusing on completing the test case variation. There are several things that interests me more during working in this assignment. First, I am more interested in implementing what kind of project structures to implement in this project. I have tried implementing Pageobjects -> Steps -> Specs
2. **Biggest Issue** I tried to implement parallel multi platform in this project. But I failed to do so, since the time is really short to explore such big configuration (for me). You can try to execute during the previous commit 'feat: multiremotebrowser'. The issue is the port management, since I cannot control the command to send only to one driver, so the Appium driver keeps crashing. The documentation from WDIO is not really helping also. In the end, I divided the config file to run in android and chrome, which not implementing multiplatform.
3. I also happen to explore a simple swipe command. But I need more time to do that, since the native developed wdio command 'ScrollIntoView' seems like not working on Appium. The Solution will be using `action` command from native Appium. Which can be implemented later.
4. I also stumble on API Implementation, since I usually use supertest. But seems like supertest is not really easy-to-use with Typescript. So I use Axios instead.
5. This is my first time using webDriverIO. Thus, I need to explore from the basic furthermore on what I imagine I should do on developing test automation. Here are my thoughts about WebDriverIO.
a. Object locator are relatively easy to declare
b. The auto-generated project seems not really helping, if you are not experienced enough
c. Documentation is not really good. Although they try, there are some sections that needed to be updated and does not work
d. Execution is fast
e. No built-in report from the start, even there are options during project building, although this is not really a big deal
f. Simple swipe command still need to be resolved manually using native commands
g. They keep retrying command that failed, to reduce flakiness
h. This contradicts if we really want the test to be failed on several tries
i. I need to explore more on important things such as TestHooks, Reports, Test Data, Folder Structures, etc.
