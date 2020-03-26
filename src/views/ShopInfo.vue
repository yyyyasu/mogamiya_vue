<template>
  <div class="wrap">
    <div class="content">
      <h2 class="headding">店舗情報</h2>
      <table class="table">
        <tr>
          <th>店名</th>
          <td>最上屋</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>〒562-0035 大阪府箕面市船場東3-10-28</td>
        </tr>
        <tr>
          <th>電話</th>
          <td>072-729-1551</td>
        </tr>
        <tr>
          <th>FAX</th>
          <td>072-729-1561</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>mogamiya@110298.com</td>
        </tr>
        <tr>
          <th>営業時間</th>
          <td>
            午前10時00分～午後7時00分 <br />
            定休日:木曜日 ※祝日の場合は営業
          </td>
        </tr>
      </table>
    </div>

    <div class="content">
      <h2 class="headding">店舗風景</h2>
      <p class="content__img">
        <img src="../assets/店舗外観.jpg" alt="店舗外観の写真" />
        <img src="../assets/店内全体.jpg" alt="店内全体の写真" />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headding {
  text-align: center;
}
.table {
  width: 100%;
  margin: {
    bottom: 5rem;
  }
  th {
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: #dedede;
    font-weight: bold;
  }
  td {
    padding: 20px;
    border: 1px solid #ccc;
  }
}

.content {
  width: 90%;
  height: 100%;
  margin: {
    top: 0;
    right: auto;
    bottom: 0;
    left: auto;
  }
}

.content__img {
  display: flex;
  width: 50%;
  height: auto;
  padding: {
    bottom: 8rem;
  }
}

@media screen and (max-width: 900px) {
  .table,
  .table tr,
  .table td,
  .table th {
    display: block;
    th {
      width: auto;
    }
  }
}
</style>
