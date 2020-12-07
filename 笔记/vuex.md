# vuex

``` javascript
  state: {
    stateA: "this is stateA value"
  },
  getters: {
    handleStateA: state => {
      return state.stateA + "???"
    }
  },
  mutations:{
    mutation_by_payload(state,val){
      state.stateA = val
    },
    mutation_by_obj(state,val){
      // this.stateA = val.someProperty // someProperty 代表任意属性名，一般用会用回需要改变的state名作为属性名，即
      state.stateA = val.stateA
    },
    mutaitonStateA(state,val){
      state.stateA = val.stateA
    }
  },
```

* state

    - 通过属性访问

        ``` javascript
        // 通过 store 实例 属性访问
        store.state.stateA
        // 在vue环境 属性访问
        this.$store.state.stateA
        ```
    - mapState

        ``` javascript
        mapState({
            // es5
            stateA_computed:function(state){
                return state.stateA
            },
            // es6
            stateA_computed(state){
                return state.stateA
            },
            // es6 箭头函数
            stateA_computed:state => state.stateA
        }) // 返回对象
        ```

        当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。

        ``` javascript
        mapState({
            // es5
            stateA:function(state){
                return state.stateA
            },
            // es6
            stateA(state){
                return state.stateA
            },
            // es6 箭头函数
            stateA:state => state.stateA,
        }),
        mapState(["stateA"])
        ```


        ``` javascript
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            // ...
        })
        ...mapState([]
            // ...
        ])
        ```

* getters

* modules

    默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。

## 总结

* state

    ``` javascript
    store.state.stateA

    mapState({
        stateA:state => state.stateA,
    })

    mapState(["stateA"]) // this.stateA
    ```

* getters

    ``` javascript
    store.getters.handleStateA

    mapGetters(["handleStateA"]) // this.handleStateA
    ```

* mutations

    ```
    commit(type: string, payload?: any, options?: Object)

    commit(mutation: Object, options?: Object)
    ```


    ``` javascript

    store.commit("mutaitonStateA", {
        stateA: "xxx"
    })

    store.commit({
        type: "mutaitonStateA",
        stateA: "xxxxxx"
    })

    mapMutations({
        mutaitonStateA: "mutaitonStateA"
    }) // this.mutaitonStateA({ type: "mutaitonStateA", stateA: "xxx" })


    mapMutations(["mutaitonStateA"]) // this.mutaitonStateA({ type: "mutaitonStateA", stateA: "xxx" })
    ```

