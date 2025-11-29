// src/pages/Craft.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Craft.css";

function ExpandableSection({ title, code, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="craft-section">
      <div
        className="craft-title"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? "▼" : "▶"} {title}</span>
      </div>

      {expanded && (
        <>
          {code && (
            <SyntaxHighlighter language="java" style={atomDark}>
              {code}
            </SyntaxHighlighter>
          )}
          {children}
        </>
      )}
    </div>
  );
}



function Craft() {

  useEffect(() => {
  const unlock = localStorage.getItem("craftAccess");
  if (!unlock) {
    window.location.href = "/"; // or navigate("/", { replace: true });
  } 

  const overlay = document.getElementById("craftOverlay");
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 300);
  }
}, []);

  return (
    <main className="craft-page">
      <h1 className="craft-header">
        If you found this, you're not a casual visitor.</h1>
      <p className="craft-intro">
        Quality isn't an act. It's an engineering choice.<br />
        This page isn't linked anywhere.<br />
        You found it either by intent or curiosity — both are welcome in my world of automation.
      </p>

      <h2 className="craft-subtitle">🧠 Core Framework Highlights</h2>

    {/* 🧠 Wait & Interaction Handling */}
<ExpandableSection
  title="⏱ Fluent Wait"
  code={`public FluentWait<AppiumDriver> fluentWait(Duration duration, Duration pollingTime) {
    FluentWait<AppiumDriver> fluentWait = new FluentWait<>(getDriver());
    fluentWait.withTimeout(duration)
            .pollingEvery(pollingTime)
            .ignoring(StaleElementReferenceException.class)
            .ignoring(NoSuchElementException.class)
            .ignoring(TimeoutException.class);
    return fluentWait;
}`}
>
  {/* Level 2 */}
  <ExpandableSection
    title="👆 Click Method (with Retry)"
    code={`public void click(WebElement ele) {
    try {
        fluentWait(Duration.ofSeconds(7), Duration.ofMillis(100)).until(ExpectedConditions.visibilityOf(ele));
        ele.click();
    } catch (StaleElementReferenceException e) {
        System.out.println("Stale element found, retrying...");
        try {
            fluentWait(Duration.ofSeconds(5), Duration.ofMillis(100)).until(ExpectedConditions.visibilityOf(ele));
            ele.click();
        } catch (Exception retryException) {
            System.out.println("Retry failed: " + retryException.getMessage());
        }
    } catch (NoSuchElementException | ElementNotInteractableException e) {
        System.out.println("Element not found or not interactable: " + e.getMessage());
    } catch (TimeoutException e) {
        System.out.println("Timeout while waiting for element to be clickable: " + e.getMessage());
    }
}`}
  >
    {/* Level 3 */}
    <ExpandableSection
      title="⌨ SendKeys Method (with Fluent Wait & Platform Handling)"
      code={`public void sendKeys(WebElement ele, String text) {
    try {
        performSendKeys(ele, text);
    } catch (StaleElementReferenceException e) {
        System.out.println("Stale element found, retrying...");
        try {
            performSendKeys(ele, text);
        } catch (Exception retryException) {
            System.out.println("Retry failed: " + retryException.getMessage());
        }
    } catch (NoSuchElementException | ElementNotInteractableException e) {
        System.out.println("Element not found or not interactable: " + e.getMessage());
    } catch (TimeoutException e) {
        System.out.println("Timeout while waiting for element: " + e.getMessage());
    }
}

private void performSendKeys(WebElement ele, String text) {
    String platform = getDriver().getCapabilities().getPlatformName().toString().toLowerCase();

    fluentWait(Duration.ofSeconds(7), Duration.ofMillis(100))
            .until(ExpectedConditions.visibilityOf(ele));

    ele.clear();
    ele.sendKeys(text);

    try {
        if (platform.equalsIgnoreCase("android")) {
            JavascriptExecutor js = (JavascriptExecutor) getDriver();
            js.executeScript("mobile: hideKeyboard");
        } else {
            swipeBack();
        }
    } catch (Exception e) {
        System.out.println("Keyboard already hidden or cannot be closed: " + e.getMessage());
    }
}`}
    />
  </ExpandableSection>
</ExpandableSection>


     {/* 🎥 Screen Recording - Expandable */}
<ExpandableSection
  title="📽 Screen Recording & Storage Logic"
  code={`public static void screenRecording() {
    String platform = getDriver().getCapabilities().getPlatformName().toString().toLowerCase();
    if (platform.equalsIgnoreCase("android")) {
        ((CanRecordScreen) getDriver())
            .startRecordingScreen(new AndroidStartScreenRecordingOptions()
                .withVideoSize("1080x720")
                .withBitRate(300000)
                .withTimeLimit(Duration.ofMinutes(10)));
    } else if (platform.equalsIgnoreCase("ios")) {
        ((CanRecordScreen) getDriver())
            .startRecordingScreen(new IOSStartScreenRecordingOptions()
                .withVideoType("h264")
                .withVideoScale("480:1280")
                .withFps(30)
                .withVideoQuality(IOSStartScreenRecordingOptions.VideoQuality.MEDIUM)
                .withTimeLimit(Duration.ofMinutes(5)));
    }
}

public static void stopRecording(String name) throws IOException {
    String formattedTime = new SimpleDateFormat("dd-MM-yyyy-h:mm a").format(new Date());
    String platform = getDriver().getCapabilities().getPlatformName().toString().toLowerCase();

    String base64String = "";
    try {
        base64String = ((CanRecordScreen) getDriver()).stopRecordingScreen();
    } catch (Exception e) {
        System.out.println("Video not recorded");
    }

    byte[] data = Base64.getDecoder().decode(base64String);
    String destinationPath = System.getProperty("user.dir") + "/Recordings/";

    if (platform.equalsIgnoreCase("ios")) {
        destinationPath += "iOS/" + formattedTime + "-" + name + "_iOS.mp4";
    } else if (platform.equalsIgnoreCase("android")) {
        destinationPath += "Android/" + formattedTime + "-" + name + "_Android.mp4";
    }

    Path path = Paths.get(destinationPath);
    Files.createDirectories(path.getParent());
    Files.write(path, data);

    Allure.addAttachment("Recorded Video", "video/mp4", Files.newInputStream(path), "mp4");
}`}
>
  {/* 🔥 Nested Expandable (Usage) */}
  <div style={{ marginTop: "10px" }}>
    <ExpandableSection
      title="⚙ How it's used in TestNG Lifecycle"
      code={`@BeforeMethod(alwaysRun = true)
public void beforeMethod(Method method) {
    screenRecording();
}

@AfterMethod(alwaysRun = true)
public void afterMethod(ITestResult result) throws IOException {
    stopRecording(result.getMethod().getMethodName());
}`}
    />
  </div>
</ExpandableSection>

<ExpandableSection
  title="Advanced Mobile Gestures (W3C Actions API)"
  code={null} // Parent has no direct code
>
  {/* First child */}
  <ExpandableSection
    title="Multiple Tap Gesture"
    code={`public static void performMultipleTaps(int numberOfTaps, int x, int y) {
    PointerInput finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
    java.awt.Point tapPoint = new java.awt.Point(x, y);
    for (int i = 0; i < numberOfTaps; i++) {
        Sequence tap = new Sequence(finger, 1);
        tap.addAction(finger.createPointerMove(Duration.ofMillis(10),
                PointerInput.Origin.viewport(), tapPoint.x, tapPoint.y));
        tap.addAction(finger.createPointerDown(PointerInput.MouseButton.LEFT.asArg()));
        tap.addAction(new Pause(finger, Duration.ofMillis(100)));
        tap.addAction(finger.createPointerUp(PointerInput.MouseButton.LEFT.asArg()));
        getDriver().perform(Arrays.asList(tap));
        Thread.sleep(100);
    }
}`}
  />

  {/* Second child */}
  <ExpandableSection
    title="Device-Agnostic Swipe"
    code={`public void swipeWithDimensions(int startX, int startY, int endX, int endY, int durationMs) {
    Dimension screenSize = getDriver().manage().window().getSize();
    int startXAbsolute = (startX * screenSize.getWidth()) / 100;
    int startYAbsolute = (startY * screenSize.getHeight()) / 100;
    int endXAbsolute = (endX * screenSize.getWidth()) / 100;
    int endYAbsolute = (endY * screenSize.getHeight()) / 100;
    PointerInput finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
    Sequence swipe = new Sequence(finger, 0);
    swipe.addAction(finger.createPointerMove(Duration.ZERO, PointerInput.Origin.viewport(), startXAbsolute, startYAbsolute));
    swipe.addAction(finger.createPointerDown(PointerInput.MouseButton.LEFT.asArg()));
    swipe.addAction(finger.createPointerMove(Duration.ofMillis(durationMs), PointerInput.Origin.viewport(), endXAbsolute, endYAbsolute));
    swipe.addAction(finger.createPointerUp(PointerInput.MouseButton.LEFT.asArg()));
    getDriver().perform(List.of(swipe));
}`}
  />

  {/* Third child */}
  <ExpandableSection
    title="Element Drag & Drop"
    code={`public void clickAndDragWithElement(WebElement element, int xOffset, int yOffset) {
    Actions actions = new Actions(getDriver());
    actions.moveToElement(element)
            .clickAndHold()
            .pause(Duration.ofSeconds(2))
            .moveByOffset(xOffset, yOffset)
            .release()
            .perform();
}`}
  />

  <p className="craft-note">
    *Low-level gesture automation using W3C Action API to ensure precise control, stability, 
    and platform independence for touch interactions.*
  </p>
</ExpandableSection>



      {/* <p className="craft-footer">
        Ask me about any of these in an interview.<br />
        If you're evaluating me technically — I'll match your energy.<br /><br />
        <span className="craft-note">Close this before HR sees it.</span> 😏
      </p> */}
    </main>
  );
}

export default Craft;
