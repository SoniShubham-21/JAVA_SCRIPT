const student={
    name: "shubham",
    age: 23,
    eng: 25,
    math: 45,
    phy: 63,
    getAvg(){
        let avg1=(this.eng+this.math+this.phy)/3;
        console.log(avg1);
    }
}
student.getAvg()