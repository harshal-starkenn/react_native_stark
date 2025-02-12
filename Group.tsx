import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.group}>
      <View style={[styles.conversionOutput, styles.containerIconLayout]}>
        <View style={[styles.container2, styles.containerShadowBox9]}>
          <Text
            style={[styles.pleaseEnterPasswordto, styles.kmphTypo2]}
          >{`Please enter password
to enter Override Screen`}</Text>
          <Text style={[styles.enterPassword, styles.enterTypo]}>
            Enter Password
          </Text>
          <Text style={[styles.oooooVirgin, styles.textTypo1]}>
            ooooo VIRGIN
          </Text>
          <Text style={[styles.text, styles.textTypo1]}>22%</Text>
          <Image
            style={[styles.wifi1Icon, styles.iconLayout6]}
            contentFit='cover'
            source={require("../assets/wifi-1.png")}
          />
          <Image
            style={[styles.image1Icon, styles.iconPosition4]}
            contentFit='cover'
            source={require("../assets/image-1.png")}
          />
          <Image
            style={styles.image2Icon}
            contentFit='cover'
            source={require("../assets/image-2.png")}
          />
          <Image
            style={[styles.container3Icon, styles.containerIconLayout]}
            contentFit='cover'
            source={require("../assets/container-3.png")}
          />
        </View>
        <View style={[styles.container1, styles.conversionShadowBox3]}>
          <Text style={[styles.cancel, styles.cancelPosition]}>CANCEL</Text>
          <View style={[styles.button1, styles.buttonLayout2]}>
            <Text style={[styles.signIn, styles.marPosition]}>SIGN IN</Text>
          </View>
        </View>
      </View>
      <View style={[styles.conversionOutput1, styles.containerIconLayout]}>
        <Image
          style={[styles.image3Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-3.png")}
        />
        <View style={[styles.container4, styles.containerShadowBox9]}>
          <View style={[styles.container6, styles.containerShadowBox8]}>
            <Text style={[styles.nextTest, styles.pmClr]}>
              Next Test - 01: 10: 44
            </Text>
            <Text style={[styles.alcoholTest, styles.testLayout]}>
              Alcohol Test
            </Text>
            <Image
              style={[styles.image4Icon, styles.obdPosition]}
              contentFit='cover'
              source={require("../assets/image-4.png")}
            />
          </View>
          <View style={[styles.container7, styles.containerShadowBox8]}>
            <Text style={[styles.honkingControl, styles.kmphLayout]}>
              Honking Control
            </Text>
            <Text style={[styles.noOfViolations, styles.lowPressureTypo]}>
              No. of Violations - 0
            </Text>
            <View style={[styles.button3, styles.buttonPosition1]}>
              <Text style={[styles.text1, styles.textTypo]} />
              <Image
                style={[styles.holdIcon, styles.text1Position]}
                contentFit='cover'
                source={require("../assets/hold.png")}
              />
            </View>
          </View>
          <View style={[styles.container8, styles.containerShadowBox8]}>
            <Text style={[styles.speedOfCruising, styles.amTypo]}>
              Speed of Cruising - 50Kmph
            </Text>
            <Text style={[styles.cruiseControl, styles.testLayout]}>
              Cruise Control
            </Text>
            <View style={[styles.button4, styles.buttonBg1]}>
              <Text style={[styles.text2, styles.textIconPosition]}>8</Text>
            </View>
          </View>
          <View style={[styles.container9, styles.containerShadowBox7]}>
            <Text style={[styles.nextTest, styles.pmClr]}>Enabled</Text>
            <Text style={[styles.obd, styles.obdPosition]}>OBD</Text>
            <Image
              style={[styles.image5Icon, styles.buttonPosition1]}
              contentFit='cover'
              source={require("../assets/image-5.png")}
            />
          </View>
          <View style={[styles.container10, styles.containerShadowBox7]}>
            <Text style={[styles.lowPressure, styles.lowPressureTypo]}>
              Low Pressure - Front Right Tyre
            </Text>
            <Text style={[styles.tpms, styles.obdPosition]}>TPMS</Text>
          </View>
          <View style={[styles.container11, styles.containerLayout2]}>
            <View style={[styles.container5, styles.buttonPosition1]}>
              <Text style={[styles.z3, styles.z3Typo]}>z3</Text>
            </View>
            <Text style={[styles.obd, styles.obdPosition]}>Sleep Sensor</Text>
            <Text style={[styles.nextTest, styles.pmClr]}>
              Next Test - 02:12:33
            </Text>
          </View>
          <View style={[styles.container12, styles.avgscorePosition]}>
            <Text style={[styles.noOfViolations, styles.lowPressureTypo]}>
              Mileage - 11.1KmpL
            </Text>
            <Text style={[styles.obd, styles.obdPosition]}>Fuel Usage</Text>
          </View>
          <View style={[styles.button2, styles.buttonBg]}>
            <Text style={[styles.goBackTo, styles.startPosition]}>
              GO BACK TO MAP ROUTE
            </Text>
            <Image
              style={[styles.arrowRightIcon, styles.iconLayout5]}
              contentFit='cover'
              source={require("../assets/arrow-right.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.conversionOutput11, styles.conversionShadowBox2]}>
        <Text style={[styles.sixth, styles.sixthLayout]}>SIXTH</Text>
        <Text style={[styles.sensor, styles.sixthPosition]}>SENSOR</Text>
        <Image
          style={[styles.image6Icon, styles.iconLayout4]}
          contentFit='cover'
          source={require("../assets/image-6.png")}
        />
        <Image
          style={[styles.image7Icon, styles.iconLayout3]}
          contentFit='cover'
          source={require("../assets/image-7.png")}
        />
      </View>
      <View style={[styles.conversionOutput2, styles.conversionShadowBox2]}>
        <Text style={[styles.sixth1, styles.sixthLayout]}>SIXTH</Text>
        <Image
          style={[styles.image8Icon, styles.iconLayout4]}
          contentFit='cover'
          source={require("../assets/image-8.png")}
        />
        <Image
          style={[styles.image9Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-9.png")}
        />
      </View>
      <Image
        style={[styles.conversionOutput3, styles.containerIconLayout]}
        contentFit='cover'
        source={require("../assets/conversion-output-3.png")}
      />
      <View style={[styles.conversionOutput4, styles.conversionShadowBox1]}>
        <View style={[styles.button5, styles.button5Layout]}>
          <Text style={[styles.startTest, styles.startPosition]}>
            START TEST
          </Text>
        </View>
        <Image
          style={[styles.image11Icon, styles.iconLayout3]}
          contentFit='cover'
          source={require("../assets/image-11.png")}
        />
      </View>
      <View style={[styles.conversionOutput5, styles.conversionShadowBox1]}>
        <Text style={[styles.skip, styles.testLayout]}>SKIP</Text>
        <View style={[styles.button5, styles.button5Layout]}>
          <Text style={[styles.tryAgain, styles.startPosition]}>TRY AGAIN</Text>
        </View>
        <Image
          style={[styles.image12Icon, styles.iconLayout3]}
          contentFit='cover'
          source={require("../assets/image-12.png")}
        />
      </View>
      <View style={[styles.conversionOutput6, styles.containerIconLayout]}>
        <View style={[styles.container13, styles.iconLayout3]}>
          <Text style={[styles.testPassed, styles.testPassedPosition]}>
            Test Passed
          </Text>
          <View style={[styles.button7, styles.containerLayout1]}>
            <Text style={[styles.startTrip, styles.startPosition]}>
              START TRIP
            </Text>
            <Image
              style={[styles.arrowRightIcon1, styles.textIconPosition]}
              contentFit='cover'
              source={require("../assets/arrow-right1.png")}
            />
          </View>
          <Image
            style={styles.image13Icon}
            contentFit='cover'
            source={require("../assets/image-13.png")}
          />
        </View>
        <Image
          style={[styles.image14Icon, styles.iconLayout3]}
          contentFit='cover'
          source={require("../assets/image-14.png")}
        />
      </View>
      <View style={[styles.conversionOutput7, styles.containerIconLayout]}>
        <View style={[styles.container14, styles.tTyrePosition]}>
          <Image
            style={[styles.image16Icon, styles.iconLayout2]}
            contentFit='cover'
            source={require("../assets/image-16.png")}
          />
        </View>
        <Text style={[styles.systemSummary, styles.testModeTypo]}>
          System Summary
        </Text>
        <Text style={[styles.dashboard, styles.text5Typo]}>Dashboard</Text>
        <Text style={[styles.testMode, styles.testModeTypo]}>Test Mode</Text>
        <Text style={[styles.tTyre, styles.tTyrePosition]}>t Tyre</Text>
        <View style={[styles.button8, styles.buttonPosition]}>
          <Text style={[styles.iol, styles.iolPosition]}>Iol</Text>
        </View>
        <View style={[styles.button9, styles.buttonPosition]}>
          <Text style={[styles.text3, styles.textTypo]} />
          <Image
            style={styles.cogIcon}
            contentFit='cover'
            source={require("../assets/cog.png")}
          />
        </View>
        <Image
          style={[styles.image15Icon, styles.buttonPosition]}
          contentFit='cover'
          source={require("../assets/image-15.png")}
        />
      </View>
      <View style={[styles.conversionOutput8, styles.conversionShadowBox3]}>
        <View style={styles.containerShadowBox6}>
          <Text style={[styles.text4, styles.z3Typo]}>6</Text>
        </View>
        <Text style={[styles.driverEvaluation, styles.tpms1Typo]}>
          Driver Evaluation
        </Text>
        <Text style={[styles.driverLicenseTnaub301210935, styles.textTypo1]}>
          DRIVER LICENSE: TNAUB301210935
        </Text>
        <Text style={[styles.raghuramNath, styles.kmphLayout]}>
          Raghuram Nath
        </Text>
        <Text style={[styles.wentOverSpeed, styles.textTypo1]}>
          WENT OVER SPEED LIMITS
        </Text>
        <Text style={[styles.missedSleepAlerts, styles.rashDrivingTypo]}>
          MISSED SLEEP ALERTS
        </Text>
        <Text style={[styles.distanceTravelled, styles.drivingTimeTypo]}>
          DISTANCE TRAVELLED
        </Text>
        <Text style={[styles.automaticBraking, styles.textTypo1]}>
          AUTOMATIC BRAKING
        </Text>
        <Text style={[styles.hrs45Mins, styles.kmTypo]}>6 hrs 45 mins</Text>
        <Text style={[styles.scoreDifference, styles.averageSpeedTypo]}>
          SCORE DIFFERENCE
        </Text>
        <Text style={[styles.fromTheLast, styles.text11Typo]}>
          (From the Last Trip)
        </Text>
        <Text style={[styles.averageSpeed, styles.averageSpeedTypo]}>
          AVERAGE SPEED
        </Text>
        <Text style={[styles.kmph, styles.kmphLayout]}>58 kmph</Text>
        <Text style={[styles.points, styles.text7Typo]}>7 points</Text>
        <Text style={[styles.rashDriving, styles.rashDrivingTypo]}>
          RASH DRIVING
        </Text>
        <Text style={[styles.drivingTime, styles.drivingTimeTypo]}>
          DRIVING TIME
        </Text>
        <Text style={[styles.greenzone, styles.textTypo1]}>GREENZONE</Text>
        <Text style={[styles.avgRating, styles.avgscorePosition]}>
          AVG. RATING
        </Text>
        <Text style={[styles.avgscore, styles.avgscorePosition]}>
          AVG.SCORE
        </Text>
        <Text style={[styles.tailgating, styles.textTypo1]}>TAILGATING</Text>
        <Text style={[styles.km, styles.kmTypo]}>25 Km</Text>
        <Text style={[styles.text5, styles.text5Typo]}>50</Text>
        <Text style={[styles.text6, styles.kmphLayout]}>25</Text>
        <Text style={[styles.text7, styles.text7Typo]}>8</Text>
        <Text style={[styles.text8, styles.kmphLayout]}>14</Text>
        <Text style={[styles.text9, styles.kmphLayout]}>5</Text>
        <Text style={[styles.text10, styles.kmphLayout]}>5</Text>
        <View style={styles.rating1}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame.png")}
          />
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame1.png")}
          />
          <Image
            style={[styles.frameIcon2, styles.miniPosition]}
            contentFit='cover'
            source={require("../assets/frame2.png")}
          />
          <Image
            style={[styles.frameIcon3, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame3.png")}
          />
          <Image
            style={[styles.frameIcon4, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame.png")}
          />
        </View>
        <Image
          style={[styles.arrowLeft1, styles.arrowLeft1Layout]}
          contentFit='cover'
          source={require("../assets/arrow-left-1.png")}
        />
        <Image
          style={styles.avatar1Icon}
          contentFit='cover'
          source={require("../assets/avatar-1.png")}
        />
        <Image
          style={[styles.image17Icon, styles.iconLayout2]}
          contentFit='cover'
          source={require("../assets/image-17.png")}
        />
      </View>
      <View style={[styles.conversionOutput9, styles.containerIconLayout]}>
        <View style={[styles.container16, styles.testPassedPosition]}>
          <Text style={[styles.enterYourCurrent, styles.iconPosition3]}>
            Enter your current location
          </Text>
          <Image
            style={[styles.image20Icon, styles.iconPosition2]}
            contentFit='cover'
            source={require("../assets/image-20.png")}
          />
          <Image
            style={[styles.image21Icon, styles.iconPosition2]}
            contentFit='cover'
            source={require("../assets/image-21.png")}
          />
        </View>
        <Text style={[styles.enterYourDestination, styles.enterTypo]}>
          Enter your destination
        </Text>
        <Text style={[styles.urdy, styles.urdyTypo]}>URDY</Text>
        <Text style={[styles.paiil, styles.urdyTypo]}>PAIIL</Text>
        <Text style={[styles.mini, styles.miniPosition]}>Mini</Text>
        <View style={[styles.checkbox1, styles.frameLayout]}>
          <View style={[styles.frame, styles.frameLayout]}>
            <View style={[styles.rectangle, styles.iconLayout6]} />
            <Text style={[styles.text11, styles.text11Typo]} />
          </View>
        </View>
        <Image
          style={styles.record1Icon}
          contentFit='cover'
          source={require("../assets/record-1.png")}
        />
        <Image
          style={[styles.image18Icon, styles.iconLayout5]}
          contentFit='cover'
          source={require("../assets/image-18.png")}
        />
        <Image
          style={[styles.image19Icon, styles.iconLayout7]}
          contentFit='cover'
          source={require("../assets/image-19.png")}
        />
        <Image
          style={styles.image22Icon}
          contentFit='cover'
          source={require("../assets/image-22.png")}
        />
        <Image
          style={[styles.image23Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-23.png")}
        />
      </View>
      <Image
        style={[styles.conversionOutput10, styles.conversionLayout1]}
        contentFit='cover'
        source={require("../assets/conversion-output-10.png")}
      />
      <View style={[styles.conversionOutput12, styles.conversionLayout]}>
        <View style={[styles.container18, styles.containerShadowBox5]}>
          <Image
            style={styles.image26Icon}
            contentFit='cover'
            source={require("../assets/image-26.png")}
          />
        </View>
        <View style={[styles.container17, styles.containerShadowBox4]}>
          <Image
            style={[styles.image25Icon, styles.iconLayout1]}
            contentFit='cover'
            source={require("../assets/image-25.png")}
          />
        </View>
        <Image
          style={[styles.image27Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-27.png")}
        />
      </View>
      <Image
        style={[styles.conversionOutput21, styles.conversionLayout]}
        contentFit='cover'
        source={require("../assets/conversion-output-2.png")}
      />
      <View style={[styles.conversionOutput31, styles.conversionLayout]}>
        <View style={[styles.container20, styles.containerShadowBox3]}>
          <Image
            style={styles.image26Icon}
            contentFit='cover'
            source={require("../assets/image-29.png")}
          />
        </View>
        <View style={[styles.container19, styles.containerShadowBox2]}>
          <Image
            style={[styles.image30Icon, styles.iconPosition3]}
            contentFit='cover'
            source={require("../assets/image-30.png")}
          />
          <Image
            style={[styles.image32Icon, styles.iconLayout]}
            contentFit='cover'
            source={require("../assets/image-32.png")}
          />
        </View>
        <Image
          style={[styles.image31Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-31.png")}
        />
      </View>
      <View style={[styles.conversionOutput41, styles.conversionLayout]}>
        <View style={[styles.container22, styles.containerShadowBox3]}>
          <Image
            style={styles.image26Icon}
            contentFit='cover'
            source={require("../assets/image-29.png")}
          />
        </View>
        <View style={[styles.container21, styles.containerShadowBox2]}>
          <Image
            style={[styles.image33Icon, styles.iconLayout]}
            contentFit='cover'
            source={require("../assets/image-33.png")}
          />
          <Image
            style={[styles.image30Icon, styles.iconPosition3]}
            contentFit='cover'
            source={require("../assets/image-30.png")}
          />
        </View>
        <Image
          style={[styles.image31Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-36.png")}
        />
      </View>
      <View style={[styles.conversionOutput51, styles.conversionLayout]}>
        <View style={[styles.container24, styles.containerShadowBox5]}>
          <Image
            style={styles.image26Icon}
            contentFit='cover'
            source={require("../assets/image-38.png")}
          />
        </View>
        <View style={[styles.container23, styles.containerShadowBox4]}>
          <Image
            style={[styles.image37Icon, styles.iconLayout1]}
            contentFit='cover'
            source={require("../assets/image-37.png")}
          />
        </View>
        <Image
          style={[styles.image27Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-27.png")}
        />
      </View>
      <View style={[styles.conversionOutput61, styles.conversionLayout]}>
        <View style={[styles.container26, styles.containerShadowBox5]}>
          <Image
            style={styles.image26Icon}
            contentFit='cover'
            source={require("../assets/image-40.png")}
          />
        </View>
        <View style={[styles.container25, styles.containerShadowBox4]}>
          <Image
            style={[styles.image41Icon, styles.iconPosition3]}
            contentFit='cover'
            source={require("../assets/image-41.png")}
          />
        </View>
        <Image
          style={[styles.image27Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-42.png")}
        />
      </View>
      <Image
        style={[styles.conversionOutput71, styles.conversionLayout1]}
        contentFit='cover'
        source={require("../assets/conversion-output-7.png")}
      />
      <View style={[styles.conversionOutput81, styles.containerIconLayout]}>
        <View style={[styles.container27, styles.containerShadowBox9]}>
          <Text style={[styles.tpms1, styles.tpms1Typo]}>TPMS</Text>
          <Text style={[styles.c, styles.cTypo]}>46'c</Text>
          <Text style={[styles.c1, styles.cTypo]}>46'c</Text>
          <Image
            style={[styles.arrowLeft1, styles.arrowLeft1Layout]}
            contentFit='cover'
            source={require("../assets/arrow-left-1.png")}
          />
          <Image
            style={[styles.image44Icon, styles.cancelPosition]}
            contentFit='cover'
            source={require("../assets/image-44.png")}
          />
          <Image
            style={[styles.image48Icon, styles.iconPosition1]}
            contentFit='cover'
            source={require("../assets/image-48.png")}
          />
        </View>
        <Text style={[styles.tyrePressureCutOff, styles.textTypo]}>
          TYRE PRESSURE CUT-OFF
        </Text>
        <Text style={[styles.i5, styles.kmphTypo2]}>I+5</Text>
        <Text style={[styles.text12, styles.sixthLayout]}>5050</Text>
        <Text style={[styles.c46c, styles.c46cTypo1]}>46'c 46'c</Text>
        <Text style={[styles.c46c1, styles.c46cTypo1]}>46'c 46'c</Text>
        <Text style={[styles.c46c2, styles.c46cTypo]}>46'c 46'c</Text>
        <Text style={[styles.c46c3, styles.c46cTypo]}>46'c 46'c</Text>
        <Text style={[styles.text13, styles.sixthLayout]}>50</Text>
        <Text style={[styles.psi, styles.enterTypo]}>PSI</Text>
        <Text style={[styles.psi1, styles.psiTypo]}>PSI</Text>
        <Text style={[styles.psi2, styles.psiTypo]}>PSI</Text>
        <Image
          style={styles.image45Icon}
          contentFit='cover'
          source={require("../assets/image-45.png")}
        />
        <Image
          style={[styles.image46Icon, styles.iconPosition]}
          contentFit='cover'
          source={require("../assets/image-46.png")}
        />
        <Image
          style={[styles.image47Icon, styles.iconPosition4]}
          contentFit='cover'
          source={require("../assets/image-47.png")}
        />
        <Image
          style={styles.image49Icon}
          contentFit='cover'
          source={require("../assets/image-49.png")}
        />
        <Image
          style={[styles.image50Icon, styles.iconPosition]}
          contentFit='cover'
          source={require("../assets/image-50.png")}
        />
      </View>
      <View style={[styles.conversionOutput91, styles.conversionShadowBox2]}>
        <View style={[styles.container29, styles.containerShadowBox9]}>
          <Image
            style={[styles.image52Icon, styles.containerIconLayout]}
            contentFit='cover'
            source={require("../assets/image-52.png")}
          />
          <View style={styles.container28}>
            <Text style={[styles.cancel1, styles.iconPosition2]}>CANCEL</Text>
          </View>
        </View>
        <Image
          style={[styles.image51Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-51.png")}
        />
      </View>
      <View style={[styles.conversionOutput101, styles.conversionLayout]}>
        <View style={[styles.container32, styles.containerShadowBox1]}>
          <Text style={[styles.violations, styles.violationsTypo]}>
            Violations
          </Text>
          <View style={[styles.container30, styles.containerLayout]}>
            <Text style={[styles.automaticBraking1, styles.kmphLayout]}>
              Automatic braking
            </Text>
            <Text style={[styles.acceleratorCutOff, styles.amTypo]}>
              Accelerator cut-off
            </Text>
            <Text style={[styles.pm, styles.pmClr]}>09:00 PM</Text>
            <Text style={[styles.pm1, styles.amTypo]}>11:00 PM</Text>
            <View style={styles.button11}>
              <Text style={[styles.today, styles.textIconPosition]}>TODAY</Text>
            </View>
          </View>
          <View style={[styles.container31, styles.containerLayout1]}>
            <Text style={[styles.automaticBraking2, styles.automaticTypo]}>
              Automatic braking
            </Text>
            <Text style={[styles.automaticBraking3, styles.automaticTypo]}>
              Automatic braking
            </Text>
            <Text style={[styles.acceleratorCutOff1, styles.lowPressureTypo]}>
              Accelerator cut-off
            </Text>
            <Text style={[styles.pm2, styles.pmClr]}>09:00 PM</Text>
            <Text style={[styles.am, styles.amTypo]}>01:00 AM</Text>
            <Text style={[styles.pm, styles.pmClr]}>11:00 PM</Text>
            <View style={[styles.button10, styles.buttonLayout]}>
              <Text style={[styles.mar17, styles.marPosition]}>MAR'17</Text>
              <Image
                style={[styles.accountCircleIcon, styles.textIconPosition]}
                contentFit='cover'
                source={require("../assets/account-circle.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.image53Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-53.png")}
        />
      </View>
      <Image
        style={[styles.conversionOutput13, styles.conversionLayout]}
        contentFit='cover'
        source={require("../assets/conversion-output-2.png")}
      />
      <View style={[styles.conversionOutput22, styles.conversionLayout]}>
        <View style={[styles.container35, styles.containerShadowBox1]}>
          <Text style={[styles.violations1, styles.violationsTypo]}>
            Violations
          </Text>
          <View style={[styles.container33, styles.containerShadowBox]}>
            <Text style={[styles.kmph1, styles.kmphTypo1]}>90 Kmph</Text>
            <Text style={[styles.kmph2, styles.kmphTypo1]}>85 Kmph</Text>
            <Text style={[styles.pm4, styles.kmphLayout]}>09:00 PM</Text>
            <Text style={[styles.pm5, styles.kmphLayout]}>11:00 PM</Text>
            <View style={styles.button11}>
              <Text style={[styles.today, styles.textIconPosition]}>TODAY</Text>
            </View>
          </View>
          <View style={[styles.container34, styles.containerShadowBox]}>
            <Text style={[styles.kmph3, styles.kmphLayout]}>120 Kmph</Text>
            <Text style={[styles.kmph4, styles.kmphTypo]}>80 Kmph</Text>
            <Text style={[styles.kmph5, styles.kmphTypo]}>90 Kmph</Text>
            <Text style={[styles.pm6, styles.kmphLayout]}>09:00 PM</Text>
            <Text style={[styles.am1, styles.kmphLayout]}>01:00 AM</Text>
            <Text style={[styles.pm4, styles.kmphLayout]}>11:00 PM</Text>
            <View style={[styles.button12, styles.buttonLayout]}>
              <Text style={[styles.mar171, styles.marPosition]}>MAR'17</Text>
              <Image
                style={[styles.accountCircleIcon1, styles.textIconPosition]}
                contentFit='cover'
                source={require("../assets/account-circle1.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.image55Icon, styles.containerIconLayout]}
          contentFit='cover'
          source={require("../assets/image-55.png")}
        />
      </View>
      <View style={[styles.conversionOutput32, styles.conversionShadowBox3]}>
        <View style={styles.containerShadowBox6}>
          <Text style={[styles.text4, styles.z3Typo]}>6</Text>
        </View>
        <Text style={[styles.driverEvaluation, styles.tpms1Typo]}>
          Driver Evaluation
        </Text>
        <Text style={[styles.driverLicenseTnaub301210935, styles.textTypo1]}>
          DRIVER LICENSE: TNAUB301210935
        </Text>
        <Text style={[styles.raghuramNath, styles.kmphLayout]}>
          Raghuram Nath
        </Text>
        <Text style={[styles.wentOverSpeed, styles.textTypo1]}>
          WENT OVER SPEED LIMITS
        </Text>
        <Text style={[styles.missedSleepAlerts, styles.rashDrivingTypo]}>
          MISSED SLEEP ALERTS
        </Text>
        <Text style={[styles.distanceTravelled, styles.drivingTimeTypo]}>
          DISTANCE TRAVELLED
        </Text>
        <Text style={[styles.automaticBraking, styles.textTypo1]}>
          AUTOMATIC BRAKING
        </Text>
        <Text style={[styles.hrs45Mins, styles.kmTypo]}>6 hrs 45 mins</Text>
        <Text style={[styles.scoreDifference, styles.averageSpeedTypo]}>
          SCORE DIFFERENCE
        </Text>
        <Text style={[styles.fromTheLast, styles.text11Typo]}>
          (From the Last Trip)
        </Text>
        <Text style={[styles.averageSpeed, styles.averageSpeedTypo]}>
          AVERAGE SPEED
        </Text>
        <Text style={[styles.kmph, styles.kmphLayout]}>58 kmph</Text>
        <Text style={[styles.points, styles.text7Typo]}>7 points</Text>
        <Text style={[styles.rashDriving, styles.rashDrivingTypo]}>
          RASH DRIVING
        </Text>
        <Text style={[styles.drivingTime, styles.drivingTimeTypo]}>
          DRIVING TIME
        </Text>
        <Text style={[styles.greenzone, styles.textTypo1]}>GREENZONE</Text>
        <Text style={[styles.avgRating, styles.avgscorePosition]}>
          AVG. RATING
        </Text>
        <Text style={[styles.avgscore, styles.avgscorePosition]}>
          AVG.SCORE
        </Text>
        <Text style={[styles.tailgating, styles.textTypo1]}>TAILGATING</Text>
        <Text style={[styles.km, styles.kmTypo]}>25 Km</Text>
        <Text style={[styles.text5, styles.text5Typo]}>50</Text>
        <Text style={[styles.text6, styles.kmphLayout]}>25</Text>
        <Text style={[styles.text7, styles.text7Typo]}>8</Text>
        <Text style={[styles.text8, styles.kmphLayout]}>14</Text>
        <Text style={[styles.text9, styles.kmphLayout]}>5</Text>
        <Text style={[styles.text10, styles.kmphLayout]}>5</Text>
        <View style={styles.rating1}>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame4.png")}
          />
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame5.png")}
          />
          <Image
            style={[styles.frameIcon2, styles.miniPosition]}
            contentFit='cover'
            source={require("../assets/frame6.png")}
          />
          <Image
            style={[styles.frameIcon3, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame7.png")}
          />
          <Image
            style={[styles.frameIcon4, styles.frameIconLayout]}
            contentFit='cover'
            source={require("../assets/frame4.png")}
          />
        </View>
        <Image
          style={[styles.arrowLeft1, styles.arrowLeft1Layout]}
          contentFit='cover'
          source={require("../assets/arrow-left-1.png")}
        />
        <Image
          style={styles.avatar1Icon}
          contentFit='cover'
          source={require("../assets/avatar-1.png")}
        />
        <Image
          style={[styles.image17Icon, styles.iconLayout2]}
          contentFit='cover'
          source={require("../assets/image-17.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIconLayout: {
    width: 390,
    position: "absolute",
  },
  containerShadowBox9: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
  },
  kmphTypo2: {
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  enterTypo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_mini,
  },
  textTypo1: {
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  iconLayout6: {
    height: 12,
    width: 12,
  },
  iconPosition4: {
    left: 162,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  conversionShadowBox3: {
    backgroundColor: Color.colorDimgray_200,
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  cancelPosition: {
    top: 122,
    position: "absolute",
  },
  buttonLayout2: {
    height: 48,
    position: "absolute",
  },
  marPosition: {
    lineHeight: 21,
    marginTop: -10.5,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    position: "absolute",
  },
  containerShadowBox8: {
    height: 65,
    width: 354,
    left: 18,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  pmClr: {
    color: Color.colorLightslategray_100,
    textAlign: "left",
  },
  testLayout: {
    lineHeight: 30,
    fontSize: FontSize.size_lgi,
  },
  obdPosition: {
    top: 7,
    position: "absolute",
  },
  kmphLayout: {
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  lowPressureTypo: {
    top: 34,
    color: Color.colorLightslategray_100,
    lineHeight: 26,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  buttonPosition1: {
    height: 43,
    left: 11,
    top: 11,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.manropeRegular,
  },
  text1Position: {
    marginLeft: -15,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  amTypo: {
    top: 33,
    color: Color.colorLightslategray_100,
    lineHeight: 26,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  buttonBg1: {
    backgroundColor: Color.colorIndianred_100,
    overflow: "hidden",
  },
  textIconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerShadowBox7: {
    height: 66,
    backgroundColor: Color.colorWhite,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  containerLayout2: {
    width: 355,
    left: 18,
    borderRadius: Border.br_9xs,
  },
  z3Typo: {
    lineHeight: 14,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  avgscorePosition: {
    top: 253,
    position: "absolute",
  },
  buttonBg: {
    backgroundColor: Color.colorMediumseagreen,
    overflow: "hidden",
  },
  startPosition: {
    lineHeight: 27,
    marginTop: -13.5,
    fontSize: FontSize.size_lgi,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout5: {
    height: 25,
    position: "absolute",
  },
  conversionShadowBox2: {
    backgroundColor: Color.colorSlategray_200,
    overflow: "hidden",
    width: 390,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
    position: "absolute",
  },
  sixthLayout: {
    lineHeight: 32,
    fontSize: FontSize.size_2xl,
  },
  sixthPosition: {
    left: 169,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout4: {
    height: 76,
    width: 76,
    borderRadius: Border.br_19xl,
    position: "absolute",
  },
  iconLayout3: {
    width: 389,
    position: "absolute",
  },
  conversionShadowBox1: {
    backgroundColor: Color.colorDarkslategray_100,
    overflow: "hidden",
    height: 693,
    width: 390,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
    position: "absolute",
  },
  button5Layout: {
    width: 353,
    borderRadius: Border.br_9xs,
  },
  testPassedPosition: {
    top: 59,
    position: "absolute",
  },
  containerLayout1: {
    width: 359,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  tTyrePosition: {
    left: 316,
    position: "absolute",
  },
  iconLayout2: {
    height: 21,
    width: 20,
    top: 39,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  testModeTypo: {
    left: 107,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text5Typo: {
    left: 108,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  buttonPosition: {
    left: 29,
    height: 43,
    borderRadius: Border.br_3xl,
    position: "absolute",
  },
  iolPosition: {
    marginTop: -12.5,
    left: "50%",
    top: "50%",
  },
  tpms1Typo: {
    top: 39,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  rashDrivingTypo: {
    left: 24,
    color: Color.colorSilver,
    lineHeight: 22,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  drivingTimeTypo: {
    top: 315,
    color: Color.colorSilver,
    lineHeight: 22,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  kmTypo: {
    top: 292,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  averageSpeedTypo: {
    top: 376,
    color: Color.colorSilver,
    lineHeight: 22,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  text11Typo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  text7Typo: {
    color: Color.colorTomato,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameIconLayout: {
    width: 19,
    height: 19,
    overflow: "hidden",
    top: 0,
  },
  miniPosition: {
    left: 47,
    position: "absolute",
  },
  arrowLeft1Layout: {
    width: 20,
    height: 20,
  },
  iconPosition3: {
    top: 10,
    position: "absolute",
  },
  iconPosition2: {
    top: 12,
    position: "absolute",
  },
  urdyTypo: {
    color: Color.colorTan,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    top: 99,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  frameLayout: {
    width: 36,
    height: 20,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  iconLayout7: {
    height: 20,
    width: 12,
    borderRadius: Border.br_9xs,
  },
  conversionLayout1: {
    height: 692,
    overflow: "hidden",
    width: 390,
    top: 0,
    position: "absolute",
  },
  conversionLayout: {
    height: 694,
    overflow: "hidden",
    width: 390,
    top: 0,
    position: "absolute",
  },
  containerShadowBox5: {
    height: 247,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  containerShadowBox4: {
    height: 164,
    top: 250,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 54,
    top: 10,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  containerShadowBox3: {
    height: 246,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  containerShadowBox2: {
    top: 249,
    height: 164,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 37,
    width: 79,
    left: 249,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  cTypo: {
    top: 202,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    position: "absolute",
  },
  iconPosition1: {
    left: 113,
    width: 31,
  },
  c46cTypo1: {
    top: 422,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    position: "absolute",
  },
  c46cTypo: {
    top: 534,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    position: "absolute",
  },
  psiTypo: {
    top: 383,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    position: "absolute",
  },
  iconPosition: {
    top: 452,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  containerShadowBox1: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    width: 390,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    position: "absolute",
  },
  violationsTypo: {
    fontSize: FontSize.size_xl,
    left: 149,
    color: Color.colorGray_200,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  containerLayout: {
    height: 113,
    left: 16,
  },
  automaticTypo: {
    left: 189,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  buttonLayout: {
    width: 84,
    height: 23,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorMediumseagreen,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  containerShadowBox: {
    width: 357,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  kmphTypo1: {
    left: 263,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  kmphTypo: {
    left: 262,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  pleaseEnterPasswordto: {
    top: 206,
    fontSize: 25,
    lineHeight: 35,
    width: 310,
    textAlign: "center",
    color: Color.colorWhite,
    left: 42,
    position: "absolute",
  },
  enterPassword: {
    top: 307,
    left: 142,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  oooooVirgin: {
    left: 8,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    top: 1,
    color: Color.colorWhite,
    position: "absolute",
  },
  text: {
    left: 330,
    color: Color.colorSilver,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    top: 1,
    position: "absolute",
  },
  wifi1Icon: {
    left: 92,
    top: 4,
    overflow: "hidden",
    position: "absolute",
  },
  image1Icon: {
    width: 67,
    height: 80,
    borderRadius: Border.br_9xs,
    top: 88,
  },
  image2Icon: {
    top: 2,
    left: 314,
    height: 16,
    width: 9,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  container3Icon: {
    height: 40,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  container2: {
    backgroundColor: "#60687a",
    height: 349,
    width: 390,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    top: 0,
  },
  cancel: {
    left: 167,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
  },
  signIn: {
    marginLeft: -25,
  },
  button1: {
    top: 43,
    borderRadius: 24,
    width: 339,
    backgroundColor: Color.colorIndianred_200,
    height: 48,
    left: 26,
    overflow: "hidden",
  },
  container1: {
    top: 350,
    height: 343,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    left: 0,
  },
  conversionOutput: {
    backgroundColor: "#f1f1f3",
    overflow: "hidden",
    height: 693,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    left: 0,
    top: 0,
  },
  image3Icon: {
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    height: 934,
  },
  nextTest: {
    top: 35,
    lineHeight: 26,
    color: Color.colorLightslategray_100,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
    left: 77,
  },
  alcoholTest: {
    top: 9,
    color: Color.colorGray_200,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  image4Icon: {
    left: 7,
    borderRadius: 25,
    width: 49,
    height: 49,
  },
  container6: {
    top: 27,
  },
  honkingControl: {
    top: 7,
    position: "absolute",
    color: Color.colorGray_200,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  noOfViolations: {
    left: 77,
  },
  text1: {
    marginLeft: -15,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginTop: -13,
    textAlign: "left",
    color: Color.colorWhite,
  },
  holdIcon: {
    marginTop: -15,
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  button3: {
    width: 54,
    backgroundColor: Color.colorCornflowerblue,
    overflow: "hidden",
    borderRadius: Border.br_3xl,
    height: 43,
    left: 11,
  },
  container7: {
    top: 481,
  },
  speedOfCruising: {
    left: 76,
  },
  cruiseControl: {
    top: 6,
    color: Color.colorGray_200,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text2: {
    marginTop: -14.5,
    marginLeft: -6.5,
    fontSize: 22,
    lineHeight: 29,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorWhite,
  },
  button4: {
    width: 44,
    height: 43,
    left: 11,
    top: 11,
    position: "absolute",
    borderRadius: Border.br_3xl,
  },
  container8: {
    top: 178,
  },
  obd: {
    color: Color.colorGray_200,
    lineHeight: 30,
    fontSize: FontSize.size_lgi,
    left: 76,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  image5Icon: {
    width: 43,
    borderRadius: Border.br_3xl,
    height: 43,
    left: 11,
  },
  container9: {
    top: 404,
    width: 354,
    height: 66,
    left: 18,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  lowPressure: {
    left: 98,
  },
  tpms: {
    left: 75,
    color: Color.colorGray_200,
    lineHeight: 30,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  container10: {
    top: 103,
    width: 354,
    height: 66,
    left: 18,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  z3: {
    top: 23,
    left: 26,
    lineHeight: 14,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorWhite,
  },
  container5: {
    backgroundColor: "#f5be59",
    width: 44,
    height: 43,
    left: 11,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  container11: {
    top: 328,
    height: 66,
    backgroundColor: Color.colorWhite,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  container12: {
    width: 355,
    left: 18,
    borderRadius: Border.br_9xs,
    height: 66,
    backgroundColor: Color.colorWhite,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  goBackTo: {
    marginLeft: -92,
  },
  arrowRightIcon: {
    marginLeft: -125,
    width: 25,
    marginTop: -12.5,
    left: "50%",
    top: "50%",
    overflow: "hidden",
  },
  button2: {
    top: 568,
    width: 355,
    left: 18,
    borderRadius: Border.br_9xs,
    height: 48,
    position: "absolute",
  },
  container4: {
    top: 305,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 629,
    backgroundColor: Color.colorWhite,
    width: 390,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
  },
  conversionOutput1: {
    left: 550,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
    height: 934,
  },
  sixth: {
    top: 115,
    left: 169,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  sensor: {
    top: 136,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.manropeRegular,
  },
  image6Icon: {
    top: 40,
    left: 158,
  },
  image7Icon: {
    top: 219,
    height: 474,
    left: 1,
    borderRadius: Border.br_9xs,
  },
  conversionOutput11: {
    left: 1100,
    height: 693,
  },
  sixth1: {
    left: 168,
    top: 116,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  image8Icon: {
    top: 41,
    left: 157,
  },
  image9Icon: {
    top: 217,
    height: 476,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  conversionOutput2: {
    left: 1650,
    height: 693,
  },
  conversionOutput3: {
    left: 2200,
    height: 518,
    overflow: "hidden",
    top: 0,
  },
  startTest: {
    marginLeft: -53.5,
  },
  button5: {
    top: 514,
    left: 16,
    backgroundColor: Color.colorMediumseagreen,
    overflow: "hidden",
    height: 48,
    position: "absolute",
  },
  image11Icon: {
    height: 426,
    left: 1,
    borderRadius: Border.br_9xs,
    top: 88,
  },
  conversionOutput4: {
    left: 2750,
  },
  skip: {
    top: 588,
    left: 172,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  tryAgain: {
    marginLeft: -46.5,
  },
  image12Icon: {
    borderRadius: 195,
    height: 389,
    left: 1,
    top: 88,
  },
  conversionOutput5: {
    left: 3300,
  },
  testPassed: {
    left: 91,
    fontSize: 35,
    lineHeight: 50,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  startTrip: {
    marginLeft: -33.5,
  },
  arrowRightIcon1: {
    marginLeft: -67.5,
    width: 26,
    height: 26,
    marginTop: -13,
    overflow: "hidden",
  },
  button7: {
    top: 129,
    backgroundColor: Color.colorMediumseagreen,
    overflow: "hidden",
    height: 49,
    left: 18,
  },
  image13Icon: {
    top: 177,
    width: 387,
    height: 228,
    left: 1,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  container13: {
    top: 288,
    backgroundColor: "#4b5262",
    height: 406,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
  },
  image14Icon: {
    height: 227,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  conversionOutput6: {
    left: 3850,
    backgroundColor: "#a3c53a",
    overflow: "hidden",
    height: 693,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
  },
  image16Icon: {
    left: 37,
  },
  container14: {
    backgroundColor: "#8a8f9a",
    width: 73,
    height: 304,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    top: 0,
  },
  systemSummary: {
    top: 116,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  dashboard: {
    top: 46,
    lineHeight: 30,
    fontSize: FontSize.size_lgi,
    color: Color.colorWhite,
  },
  testMode: {
    top: 191,
    lineHeight: 30,
    fontSize: FontSize.size_lgi,
  },
  tTyre: {
    top: 439,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  iol: {
    marginLeft: -9,
    lineHeight: 25,
    fontSize: FontSize.size_mid,
    marginTop: -12.5,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  button8: {
    top: 36,
    width: 44,
    backgroundColor: Color.colorCornflowerblue,
    overflow: "hidden",
  },
  text3: {
    marginLeft: 13.5,
    marginTop: -13,
    left: "50%",
    top: "50%",
    position: "absolute",
    textAlign: "left",
    color: Color.colorWhite,
  },
  cogIcon: {
    marginLeft: -13.5,
    width: 27,
    height: 27,
    marginTop: -13.5,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  button9: {
    top: 109,
    width: 51,
    backgroundColor: Color.colorIndianred_100,
    overflow: "hidden",
  },
  image15Icon: {
    top: 181,
    width: 43,
  },
  conversionOutput7: {
    left: 4400,
    backgroundColor: "#41495c",
    overflow: "hidden",
    height: 693,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
  },
  text4: {
    top: 3,
    left: 4,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  containerShadowBox6: {
    height: 17,
    backgroundColor: Color.colorDimgray_100,
    left: 356,
    top: 522,
    width: 9,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  driverEvaluation: {
    left: 60,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  driverLicenseTnaub301210935: {
    top: 190,
    left: 84,
    color: Color.colorSilver,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    position: "absolute",
  },
  raghuramNath: {
    top: 163,
    left: 132,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  wentOverSpeed: {
    top: 598,
    left: 23,
    color: Color.colorSilver,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    position: "absolute",
  },
  missedSleepAlerts: {
    top: 560,
  },
  distanceTravelled: {
    left: 226,
  },
  automaticBraking: {
    top: 445,
    left: 23,
    color: Color.colorSilver,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    position: "absolute",
  },
  hrs45Mins: {
    left: 23,
  },
  scoreDifference: {
    left: 230,
  },
  fromTheLast: {
    top: 394,
    left: 243,
    color: Color.colorSilver,
  },
  averageSpeed: {
    left: 23,
  },
  kmph: {
    top: 353,
    left: 44,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  points: {
    top: 354,
    left: 269,
  },
  rashDriving: {
    top: 521,
  },
  drivingTime: {
    left: 31,
  },
  greenzone: {
    top: 636,
    left: 23,
    color: Color.colorSilver,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    position: "absolute",
  },
  avgRating: {
    left: 213,
    color: Color.colorSilver,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_smi,
  },
  avgscore: {
    left: 82,
    color: Color.colorSilver,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_smi,
  },
  tailgating: {
    top: 483,
    left: 23,
    color: Color.colorSilver,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    position: "absolute",
  },
  km: {
    left: 272,
  },
  text5: {
    top: 226,
    color: Color.colorOrange,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  text6: {
    top: 594,
    left: 346,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text7: {
    top: 556,
    left: 347,
  },
  text8: {
    top: 442,
    left: 350,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text9: {
    top: 479,
    left: 358,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text10: {
    top: 632,
    left: 355,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameIcon: {
    left: 0,
    position: "absolute",
  },
  frameIcon1: {
    left: 23,
    position: "absolute",
  },
  frameIcon2: {
    width: 19,
    height: 19,
    overflow: "hidden",
    top: 0,
  },
  frameIcon3: {
    left: 70,
    position: "absolute",
  },
  frameIcon4: {
    left: 93,
    position: "absolute",
  },
  rating1: {
    top: 232,
    left: 196,
    width: 112,
    height: 19,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  arrowLeft1: {
    top: 44,
    height: 20,
    left: 17,
    overflow: "hidden",
    position: "absolute",
  },
  avatar1Icon: {
    top: 85,
    left: 161,
    borderRadius: Border.br_13xl,
    width: 64,
    height: 64,
    overflow: "hidden",
    position: "absolute",
  },
  image17Icon: {
    left: 353,
  },
  conversionOutput8: {
    left: 4950,
    overflow: "hidden",
    height: 693,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
  },
  enterYourCurrent: {
    left: 56,
    color: Color.colorSilver,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  image20Icon: {
    left: 320,
    height: 20,
    width: 20,
    borderRadius: Border.br_9xs,
  },
  image21Icon: {
    left: 14,
    height: 20,
    borderRadius: Border.br_9xs,
    width: 12,
  },
  container16: {
    height: 44,
    width: 353,
    borderRadius: Border.br_9xs,
    left: 18,
    backgroundColor: Color.colorWhite,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  enterYourDestination: {
    top: 124,
    left: 74,
    color: Color.colorSilver,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  urdy: {
    left: 181,
  },
  paiil: {
    left: 229,
  },
  mini: {
    top: 102,
    fontSize: 3,
    lineHeight: 6,
    width: 7,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  rectangle: {
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: "#565d6d",
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    top: 4,
    left: 0,
    position: "absolute",
  },
  text11: {
    left: 16,
    color: Color.colorGray_200,
    top: 0,
  },
  frame: {
    left: 0,
    top: 0,
  },
  checkbox1: {
    left: 300,
    top: 651,
  },
  record1Icon: {
    left: 177,
    width: 24,
    height: 24,
    top: 651,
    overflow: "hidden",
    position: "absolute",
  },
  image18Icon: {
    left: 55,
    width: 21,
    top: 651,
    borderRadius: Border.br_9xs,
  },
  image19Icon: {
    top: 126,
    left: 32,
    height: 20,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image22Icon: {
    left: 5,
    width: 384,
    height: 61,
    borderRadius: Border.br_9xs,
    top: 0,
    position: "absolute",
  },
  image23Icon: {
    top: 141,
    height: 495,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  conversionOutput9: {
    left: 5500,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    height: 693,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
  },
  conversionOutput10: {
    left: 6050,
  },
  image26Icon: {
    left: 127,
    borderRadius: Border.br_47xl,
    width: 131,
    height: 131,
    top: 36,
    position: "absolute",
  },
  container18: {
    backgroundColor: "#596476",
  },
  image25Icon: {
    width: 327,
    left: 17,
  },
  container17: {
    backgroundColor: Color.colorGray_100,
  },
  image27Icon: {
    top: 416,
    height: 277,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  conversionOutput12: {
    left: 6600,
    backgroundColor: Color.colorSlategray_100,
    height: 694,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  conversionOutput21: {
    left: 7150,
  },
  container20: {
    backgroundColor: Color.colorSlategray_300,
  },
  image30Icon: {
    width: 135,
    height: 53,
    borderRadius: Border.br_9xs,
    left: 42,
  },
  image32Icon: {
    top: 31,
  },
  container19: {
    backgroundColor: Color.colorGray_100,
  },
  image31Icon: {
    top: 415,
    height: 279,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  conversionOutput31: {
    left: 7700,
    backgroundColor: Color.colorSlategray_100,
    height: 694,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  container22: {
    backgroundColor: "#596477",
  },
  image33Icon: {
    top: 4,
  },
  container21: {
    backgroundColor: "#868685",
  },
  conversionOutput41: {
    left: 8250,
    backgroundColor: Color.colorSlategray_100,
    height: 694,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  container24: {
    backgroundColor: Color.colorSlategray_300,
  },
  image37Icon: {
    left: 54,
    width: 291,
  },
  container23: {
    backgroundColor: "#858686",
  },
  conversionOutput51: {
    left: 8800,
    backgroundColor: Color.colorSlategray_100,
    height: 694,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  container26: {
    backgroundColor: "#5a6477",
  },
  image41Icon: {
    left: 49,
    width: 249,
    height: 55,
    borderRadius: Border.br_9xs,
  },
  container25: {
    backgroundColor: "#858585",
  },
  conversionOutput61: {
    left: 9350,
    backgroundColor: Color.colorSlategray_100,
    height: 694,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  conversionOutput71: {
    left: 9900,
  },
  tpms1: {
    left: 58,
    lineHeight: 32,
    fontSize: FontSize.size_2xl,
  },
  c: {
    left: 248,
  },
  c1: {
    left: 114,
  },
  image44Icon: {
    height: 77,
    width: 33,
    left: 247,
    borderRadius: Border.br_9xs,
  },
  image48Icon: {
    top: 125,
    height: 74,
    width: 31,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  container27: {
    backgroundColor: "#48546a",
    height: 315,
    width: 390,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
    top: 0,
  },
  tyrePressureCutOff: {
    top: 641,
    left: 96,
    color: Color.colorSilver,
    textAlign: "left",
    position: "absolute",
  },
  i5: {
    top: 607,
    left: 201,
    fontSize: 26,
    lineHeight: 40,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  text12: {
    top: 362,
    left: 81,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  c46c: {
    left: 78,
  },
  c46c1: {
    left: 247,
  },
  c46c2: {
    left: 78,
  },
  c46c3: {
    left: 247,
  },
  text13: {
    top: 472,
    left: 286,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  psi: {
    top: 492,
    left: 287,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorWhite,
    position: "absolute",
  },
  psi1: {
    left: 82,
  },
  psi2: {
    left: 117,
  },
  image45Icon: {
    top: 467,
    height: 62,
    width: 31,
    left: 247,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image46Icon: {
    width: 31,
    left: 113,
    height: 77,
  },
  image47Icon: {
    top: 611,
    width: 39,
    height: 28,
    borderRadius: Border.br_9xs,
  },
  image49Icon: {
    top: 343,
    left: 246,
    width: 68,
    height: 75,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image50Icon: {
    height: 79,
    width: 33,
    left: 76,
  },
  conversionOutput81: {
    left: 10450,
    backgroundColor: "#565e6b",
    overflow: "hidden",
    height: 693,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
  },
  image52Icon: {
    top: 58,
    height: 90,
    borderRadius: Border.br_9xs,
    left: 0,
  },
  cancel1: {
    left: 139,
    lineHeight: 30,
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  container28: {
    left: 16,
    top: 11,
    width: 354,
    height: 48,
    backgroundColor: Color.colorIndianred_200,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  container29: {
    top: 547,
    backgroundColor: "#4b5263",
    height: 148,
    borderRadius: Border.br_9xs,
    width: 390,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    left: 0,
  },
  image51Icon: {
    height: 561,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  conversionOutput91: {
    left: 11000,
    height: 695,
  },
  violations: {
    top: 14,
  },
  automaticBraking1: {
    left: 190,
    top: 75,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  acceleratorCutOff: {
    left: 187,
  },
  pm: {
    top: 76,
    left: 17,
    lineHeight: 26,
    color: Color.colorLightslategray_100,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  pm1: {
    left: 18,
  },
  today: {
    marginTop: -11,
    marginLeft: -24,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_mini,
    top: "50%",
    color: Color.colorWhite,
  },
  button11: {
    width: 70,
    height: 23,
    borderRadius: Border.br_10xs,
    left: 1,
    backgroundColor: Color.colorCornflowerblue,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  container30: {
    top: 56,
    width: 359,
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  automaticBraking2: {
    top: 118,
  },
  automaticBraking3: {
    top: 76,
  },
  acceleratorCutOff1: {
    left: 186,
  },
  pm2: {
    top: 119,
    left: 16,
    lineHeight: 26,
    color: Color.colorLightslategray_100,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  am: {
    left: 16,
  },
  mar17: {
    marginLeft: -16,
  },
  accountCircleIcon: {
    marginTop: -6,
    marginLeft: -32,
    height: 12,
    width: 12,
    overflow: "hidden",
  },
  button10: {
    top: 0,
  },
  container31: {
    top: 180,
    height: 153,
    left: 17,
    backgroundColor: Color.colorWhite,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  container32: {
    top: 321,
    height: 373,
  },
  image53Icon: {
    height: 321,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  conversionOutput101: {
    left: 11550,
    backgroundColor: "#525a67",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  conversionOutput13: {
    left: 12100,
  },
  violations1: {
    top: 13,
  },
  kmph1: {
    top: 32,
  },
  kmph2: {
    top: 75,
  },
  pm4: {
    top: 75,
    left: 17,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  pm5: {
    top: 32,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    left: 18,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  container33: {
    top: 55,
    height: 113,
    left: 16,
  },
  kmph3: {
    left: 253,
    top: 75,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  kmph4: {
    top: 118,
  },
  kmph5: {
    top: 32,
  },
  pm6: {
    top: 118,
    left: 16,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  am1: {
    top: 32,
    left: 16,
    color: Color.colorLightslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  mar171: {
    marginLeft: -15.5,
  },
  accountCircleIcon1: {
    marginTop: -6.5,
    marginLeft: -32.5,
    width: 13,
    height: 13,
    overflow: "hidden",
  },
  button12: {
    top: 1,
  },
  container34: {
    top: 179,
    height: 152,
    left: 17,
  },
  container35: {
    top: 311,
    height: 383,
  },
  image55Icon: {
    height: 311,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  conversionOutput22: {
    left: 12650,
    backgroundColor: "#424d5f",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
  },
  conversionOutput32: {
    left: 13200,
    overflow: "hidden",
    height: 693,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    top: 0,
  },
  group: {
    flex: 1,
    width: "100%",
    height: 934,
  },
});

export default Group;
