<template>
  <div>
    <Button type="primary" @click="getData">Primary</Button>
    <h1>asdasddga</h1>
    <Table :columns="columns" :data="data"></Table>
  </div>
</template>
<script>
export default {
  methods: {
    render(h, { row, column, index }) {
      // console.log(row, column, index);
      // <h2>{row.name}</h2>
      return (
        <div on-click={ e => this.handleChangeIndex(e,index)}>
        {
          this.currentIndex === index ?
            <i-input onOn-enter={()=>this.enter(row, index) } value={row[column.key]} on-input={(value) => this.handleChange(row,column,value)}></i-input> : 
            <span>{row[column.key]}</span>
        }
          
        </div>
      );
    },
    enter(row,index){
      this.currentIndex = -1
      this.data.splice(index,1,row)
    },
    handleChange(row,column,value){
      console.log(row,column,value)
      row[column.key] = value
    },
    handleChangeIndex(e,index){ // 函数的 methods 已经被bind过了
      this.currentIndex = index
      this.$nextTick(() => {
        e.currentTarget.getElementsByTagName('input')[0].focus()
      })
    },
    getData() {
      console.log(this.data);
    },
  },
  data() {
    return {
      currentIndex:-1,
      columns: [
        {
          title: 'Name',
          key: 'name',
          render: this.render,
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03',
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',
        },
      ],
    };
  },
};
</script>
