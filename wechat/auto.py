from appium import webdriver
import time
from selenium.webdriver.support import expected_conditions as EC

from appium.webdriver.common.touch_action import TouchAction
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait

desired_caps={
  "platformName": "Android",
  "deviceName": "a",
  "appPackage": "com.tencent.mm",
  "appActivity": "com.tencent.mm.ui.LauncherUI",
    'noReset':True
}
url = 'http://localhost:4723/wd/hub'

driver = webdriver.Remote(url,desired_capabilities=desired_caps)
driver.wait_activity('.ui.LauncherUI',timeout=10)
WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, '//*[@text="通讯录"]'))
    ).click()
driver.find_element_by_xpath('//*[@text="公众号"]').click()
driver.wait_activity('.plugin.brandservice.ui.BrandServiceIndexUI',timeout=10)
while True:
    try:
      items = driver.find_elements_by_xpath('//*[@resource-id="com.tencent.mm:id/a2y"]')
      for item in items:
            item.click()
            driver.wait_activity('.ui.chatting.ChattingUI',timeout=10)
            driver.find_element_by_id('com.tencent.mm:id/jy').click()
            driver.wait_activity('.plugin.profile.ui.ContactInfoUI',timeout=10)
            # driver.find_element_by_id('com.tencent.mm:id/b0u').click()
            TouchAction(driver).press(x=569, y=2000).move_to(x=390, y=792).release().perform()
            driver.find_elements_by_xpath('//*[@resource-id="com.tencent.mm:id/b0r"]')[-1].click()
            driver.wait_activity('.plugin.profile.ui.ContactInfoUI', timeout=10)
            driver.back()
            driver.back()
            driver.back()
    except Exception as e:
      pass

    time.sleep(1)




