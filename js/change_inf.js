console.log("active");
async function change_inf() {
  const { value: formValues } = await Swal.fire({
    title: 'Sửa đổi thông tin cá nhân',
    html: 'Họ và tên:' +
      '<input id="fullname" class="swal2-input">' + 'Ngày sinh:' +
      '<input id="ngaysinh" class="swal2-input">' + 'Địa chỉ gmail:' +
      '<input id="diachiemail" class="swal2-input">' + 'Địa chỉ:' +
      '<input id="diachi" class="swal2-input">' + 'Số điện thoại:' +
      '<input id="sdt" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
        return [
        document.getElementById('Hoten').innerHTML=document.getElementById('fullname').value,
        document.getElementById('Ngaysinh').innerHTML=document.getElementById('ngaysinh').value,
        document.getElementById('Diachiemail').innerHTML=document.getElementById('diachiemail').value,
        document.getElementById('Diachi').innerHTML=document.getElementById('diachi').value,
        document.getElementById('Stt').innerHTML=document.getElementById('sdt').value
        ]
      }
  });
  if (formValues) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Bạn có chắc muốn thay đổi?',
        text:'Việc này có thể làm mất dữ liệu',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Không',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Đã Lưu!',
            'Thông tin cá nhân của bạn đã được cập nhật.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Không lưu',
            'Thông tin của bạn chưa được lưu :)',
            'error'
          )
        }
      })
    }}
