const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('http://credit.stu.edu.cn/portal/stulogin.aspx')
	await page.screenshot({
        path: 'C:/Users/user/Pictures/Saved Pictures/credit.png'
    })
	console.log("完成学分制登陆页面截图")
	await page.type('#txtUserID',"18jjhuang5",{delay:100})
	await page.type('#txtUserPwd','xxxxxx',{delay:100})
	page.click('#btnLogon')
	await page.waitForNavigation({
		waitUntil: 'load'
	})
	await page.waitFor(1000)
	if(await page.$('#txtUserID')){
		console.log("登陆失败")
		await browser.close()
	}else{
		console.log("登陆成功")
	}
    await page.screenshot({
        path: 'C:/Users/user/Pictures/Saved Pictures/credited.png'
    })
	console.log("完成学分制主页截图")
	//await browser.close();
	//学分制页面
})()