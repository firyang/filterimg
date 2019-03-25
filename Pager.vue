<template>
  <div class="pager-container">
    <div class="pager-total">
      <p>
        共有
        <span>{{ pageVO.totalRows }}</span> 条
      </p>
    </div>
    <div class="pager">
      <ul class="pager-list">
        <li @click="change(-1)">上一页</li>
        <li :class="{current: pageVO.curPage === 1}" @click="change(1)">1</li>
        <li v-if="pages[0]-1>1" class="hide-page">...</li>
        <li
          :class="{current: pageVO.curPage === page}"
          v-for="(page, idx) in pages"
          :key="'page_'+idx"
          @click="change(page,idx)"
        >{{ page }}</li>
        <li v-if="pages[pages.length-1]+1<pageVO.totalPages" class="hide-page">...</li>
        <li
          :class="{current: pageVO.curPage === pageVO.totalPages}"
          @click="change(pageVO.totalPages)"
        >{{ pageVO.totalPages }}</li>
        <li @click="change(0)">下一页</li>
      </ul>
      <p class="to-page">
        转到
        <input type="text"> 页
        <span>确定</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pager",
  props: {
    pageVO: {
      type: Object,
      default: () => {
        return {
          curPage: 30,
          pageSize: 6,
          totalRows: 26,
          totalPages: 80
        };
      }
    },
    pageCount: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pages: function() {
      let totalPages = this.pageVO.totalPages,
        pages = [],
        stat = this.pageVO.curPage === 1 ? 2 : this.pageVO.curPage,
        end =
          this.pageVO.curPage === 1
            ? 2 + this.pageCount
            : this.pageVO.curPage + this.pageCount;

      while (stat < end && end <= totalPages) {
        pages.push(stat++);
      }
      return pages;
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.pages);
  },
  methods: {
    change(pageNo, idx) {
      console.log(pageNo, idx);

      // switch (pageNo) {
      //   case -1:
      //     this.pageVO.curPage -= 1;
      //     break;
      //   case 0:
      //     this.pageVO.curPage += 1;
      //     break;
      //   default:
      //     this.pageVO.curPage = pageNo;
      // }
    }
  }
};
</script>
<style lang="less" scoped>
.pager-container {
  background: #7df;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  .pager-tottal {
    line-height: inherit;
    p {
      span {
      }
    }
  }
  .pager {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-list {
      list-style: none;
      font-size: 0;
      li {
        font-size: 12px;
        text-align-last: center;
        line-height: 34px;
        display: inline-block;
        min-width: 14px;
        padding: 0 10px;
        margin: 6px 3px 0 0;
        border: 1px solid #ddd;
        cursor: pointer;
        &:hover,
        &.current {
          background: rgb(56, 112, 218);
          color: #ffffff;
        }
        &.hide-page {
          border: none;
          &:hover {
            background: inherit;
            color: inherit;
          }
        }

        &:first-child {
        }
        &:last-child {
        }
      }
    }
    .to-page {
      margin-left: 12px;
      input {
        outline: none;
        border: none;
        width: 46px;
        line-height: 34px;
        text-align: center;
      }
      span {
        cursor: pointer;
      }
    }
  }
}
</style>


