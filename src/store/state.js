let defaultCity = '杭州'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {}
export default {
  city: '上海' || defaultCity
}
