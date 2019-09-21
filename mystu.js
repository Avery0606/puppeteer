const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://sso.stu.edu.cn/login')
	await page.screenshot({
        path: 'C:/Users/user/Pictures/Saved Pictures/mystu.png'
    })
	console.log("完成登陆页面截图")
	await page.type('#username',"18jjhuang5",{delay:100})
	await page.type('#password','xp540924',{delay:100})
	page.click('#login')
	page.waitFor(3000)
	await page.waitForNavigation({
		waitUntil: 'load'
	})
	if(await page.$('#username')){
		console.log("登陆失败")
	}else{
		console.log("登陆成功")
	}
	await page.waitFor(1000)
    await page.screenshot({
        path: 'C:/Users/user/Pictures/Saved Pictures/mystued.png'
    })
	console.log("完成MYSTU主页截图")
	//await browser.close();
	//MYSTU页面
})()
