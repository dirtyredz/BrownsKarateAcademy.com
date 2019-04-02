const axios = require('axios')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const Classes = new Promise((resolve, reject) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.mystudio.academy/m/Api/membership?companyid=2506`,{
      timeout: 20000,
      responseType: 'json',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(res => {
      console.log('Finish retrieving classes!')

      // Create a page for each Class.
      const WithPath = res.data.msg.map(data => {
        const Type = 'm'
        const {
          category_image_url: Image,
          category_title: Title,
          category_description: Description,
          category_subtitle: SubTitle,
          membership_id: ID,
          ...rest
        } = data
        const context = {
          ...rest,
          Title,
          Image,
          Description,
          SubTitle,
          Type,
          ID,
          MyStudio: `https://www.mystudio.academy/${Type}/?=7155412187/2506/${ID}`
        }
        const path = `/Classes/${Title}/`
        createPage({
          path,
          component: require.resolve("./src/templates/MyStudioView.js"),
          context,
        })
        return { ...context, path}
      })

      createPage({
        path: `/Classes`,
        component: require.resolve("./src/templates/AllView.js"),
        context: { data: WithPath, MyStudio: 'https://www.mystudio.academy/m/?=7155412187/2506///1554236716'},
      })

      resolve()
    })
    .catch((error) => {
      console.log(error)
      reject(error)
    });
  })

  const Events =  new Promise((resolve, reject) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.mystudio.academy/e/Api/events?companyid=2506`,{
      timeout: 20000,
      responseType: 'json',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(res => {
      console.log('Finish retrieving Events!')

      // Create a page for each Events.
      const WithPath = res.data.msg.map(data => {
        const Type = 'e'
        const {
          event_banner_img_url: Image,
          event_title: Title,
          event_desc: Description,
          event_category_subtitle: SubTitle,
          event_id: ID,
          ...rest
        } = data
        const context = {
          ...rest,
          Title,
          Image,
          Description,
          SubTitle,
          Type,
          ID,
          MyStudio: `https://www.mystudio.academy/${Type}/?=7155412187/2506/${ID}`
        }
        const path = `/Events/${Title}/`
        createPage({
          path,
          component: require.resolve("./src/templates/MyStudioView.js"),
          context,
        })
        return { ...context, path}
      })

      createPage({
        path: `/Events`,
        component: require.resolve("./src/templates/AllView.js"),
        context: { data: WithPath, MyStudio: 'https://www.mystudio.academy/e/?=7155412187/2506///1554236747'},
      })

      resolve()
    })
    .catch((error) => {
      console.log(error)
      reject(error)
    });
  })

  const Trials =  new Promise((resolve, reject) => {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://www.mystudio.academy/t/Api/trialdetails?companyid=2506&trial_id=`,{
      timeout: 20000,
      responseType: 'json',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(res => {
      console.log('Finish retrieving Trials!')

      // Create a page for each Trial.
      const WithPath = res.data.msg.map(data => {
        const Type = 't'
        const {
          trial_banner_img_url: Image,
          trial_title: Title,
          trial_desc: Description,
          trial_subtitle: SubTitle,
          trial_id: ID,
          ...rest
        } = data
        const context = {
          ...rest,
          Title,
          Image,
          Description,
          SubTitle,
          Type,
          ID,
          MyStudio: `https://www.mystudio.academy/${Type}/?=7155412187/2506/${ID}`
        }
        const path = `/Trials/${Title}/`
        createPage({
          path,
          component: require.resolve("./src/templates/MyStudioView.js"),
          context,
        })
        return { ...context, path}
      })

      createPage({
        path: `/Trials`,
        component: require.resolve("./src/templates/AllView.js"),
        context: { data: WithPath, MyStudio: 'https://www.mystudio.academy/t/?=7155412187/2506///1554236068' },
      })

      resolve()
    })
    .catch((error) => {
      console.log(error)
      reject(error)
    });
  })

  return Promise.all([Classes, Events, Trials]);
}
