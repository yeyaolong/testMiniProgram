import dd from 'gdt-jsapi';

Page({
 data: {
  userName: 'template 内的userName'
 },
 handleBtnClick() {
  dd.alert({
    title: 'template定义文件内的方法'
  })
 }
});
