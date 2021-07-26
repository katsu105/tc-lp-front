const React = require('react');

export default class extends React.Component {
  // static async getInitialProps(ctx) {
    // var url = process.env.BASE_URL + '/api/token_get'
    // const res = await fetch(url)
    // const json = await res.json()
    // return {
    //   data: "",
    //   items: [],
    //   csrf: json.csrf,
    // }
  // }
  constructor(props){
    super(props)
  }
  clickHandler(){
  console.log("#clickHandler" )
  this.proc_test()

  }
  async proc_test(){
    try {
      var item = {
        id: 1,
        family_name : '田中',
        first_name: '太郎',
        email_address: 'hoge@example.com',
        lead_kind: 3,
      }
      const res = await fetch('http://localhost:8080' + '/materials/1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      });
      if (res.status === 200) {
        var json = await res.json()
        alert("登録成功")
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {

      alert("Error, proc_test")
      console.error(error);
    }    
  }   
  render(){
    return (
    
    <div className="body_main_wrap">
      <button onClick={this.clickHandler.bind(this)}>登録
      </button>
    </div>
  
    )
  }
}
