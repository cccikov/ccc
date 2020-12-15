# vuex



* 无模块
* 有模块
    - 无命名空间
    - 有命名空间

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
    mutationStateA(state,val){
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

    **直接读取 state**
    ``` javascript
    store.state.stateA
    ```

    **mapState 辅助函数**
    ``` javascript
    mapState({
        stateA:state => state.stateA,
    }) // this.stateA

    mapState({
        stateA: "stateA"
    }) // this.stateA

    mapState(["stateA"]) // this.stateA
    ```

* getters

    在 store 上注册 getter，getter 方法接受以下参数：

    ``` javascript
    someGetter(
        state,     // 等同于 `store.state`， 如果在模块中定义则为模块的局部状态
        getters,   // 等同于 store.getters
    ){
        // ...
    }

    // 在模块中
    someGetter(
        state,       // 等同于 `store.state`，如果在模块中定义则为模块的局部状态
        getters,     // 等同于 store.getters
        rootState    // 等同于 store.state
        rootGetters  // 所有 getters
    ){
        // ...
    }
    ```

    **直接读取 getter**
    ``` javascript
    store.getters.handleStateA
    ```

    **mapGetters 辅助函数**
    ``` javascript
    ...mapGetters({
        handleStateA:"handleStateA"
    }) // this.handleStateA

    mapGetters(["handleStateA"]) // this.handleStateA
    ```

* mutations

    在 store 上注册 mutation，处理函数总是接受 state 作为第一个参数（如果定义在模块中，则为模块的局部状态），payload 作为第二个参数（可选）。

    mutation 处理函数

    ``` javascript
    // mutation 处理函数
    someMutation(
        state,  // 等同于 `store.state`，如果在模块中定义则为模块的局部状态
        payload // 载荷，提交（commit）mutation时，传入的值
    ){
        // ...
    }
    ```

    提交（commit） mutation

    ```
    // 提交 mutation
    commit(type: string, payload?: any, options?: Object)

    commit(mutation: Object, options?: Object)

    // 提交 mutation。options 里可以有 root: true，它允许在命名空间模块里提交根的 mutation。
    ```

    **直接提交 mutation**
    ``` javascript
    store.commit("mutationStateA", {
        stateA: "xxx"
    }) // 第二个参数 { stateA: "xxx" } 作为载荷传入

    store.commit({
        type: "mutationStateA",
        stateA: "xxxxxx"
    }) // 对象形式 整个对象 { type: "mutationStateA", stateA: "xxxxxx" } 作为载荷传入
    ```

    **辅助函数 mapMutations**
    ``` javascript
    mapMutations({
        mutationStateA: "mutationStateA"
    }) // this.mutationStateA({ stateA: "xxx" })    ， this.mutationStateA(payload) 映射为 store.commit("mutationStateA",payload)

    mapMutations(["mutationStateA"]) // this.mutationStateA({ stateA: "xxx" })
    ```

* actions

    在 store 上注册 action。处理函数总是接受 context 作为第一个参数，payload 作为第二个参数（可选）。

    context 包含以下属性(无论是否在模块中，都具有以下属性)

    ``` javascript
    {
        state, // 等同于 `store.state`，若在模块中则为局部状态
        getters, // 等同于 `store.getters`，若在模块中则为局部化的getters
        commit, // 等同于 `store.commit`，若在模块中则为局部化的commit
        dispatch, // 等同于 `store.dispatch`，若在模块中则为局部化的dispatch

        rootState, // 等同于 `store.state`，只存在于模块中
        rootGetters // 等同于 `store.getters`，只存在于模块中
    }
    ```

    action 处理函数

    ```javascript
    //  action 处理函数
    someAction(
        context, // store 实例具有相同方法和属性的 context 对象 , 比store实例多了rootState rootGetters 属性
        payload  // 载荷，分发（dispatch）action时，传入的值
    ){
        // ...
    }

    //  action 处理函数
    someAction(
        {
            state, // 等同于 `store.state`，若在模块中则为局部状态
            getters, // 等同于 `store.getters`，若在模块中则为局部化的getters
            commit, // 等同于 `store.commit`，若在模块中则为局部化的commit
            dispatch, // 等同于 `store.dispatch`，若在模块中则为局部化的dispatch

            rootState, // 等同于 `store.state`，只存在于模块中
            rootGetters // 等同于 `store.getters`，只存在于模块中
        } /* 解构后的 context */ ,
        payload
    ){
        // ...
    }
    ```

    分发（dispatch） action

    ```
    dispatch(type: string, payload?: any, options?: Object)

    dispatch(action: Object, options?: Object)

    // 分发 action。options 里可以有 root: true，它允许在命名空间模块里分发根的 action。返回一个解析所有被触发的 action 处理器的 Promise。
    ```

    ``` javascript
    store.dispatch("someAction", {
        someArgument: 10,
        someParameter: "lorem"
    })

    store.dispatch({
        type: "someAction",
        someArgument: 10,
        someParameter: "lorem"
    })

    mapActions({
        someAction: "someAction"
    }) // this.someAction({ type: "someAction", someArgument: 10, someParameter: "lorem" })

    mapActions(["someAction"]) // this.someAction({ type: "someAction", someArgument: 10, someParameter: "lorem" })
    ···

* modules

    - 无 namespaced，除了 state 有点区别外，模块内部的 action、mutation 和 getter 是注册在全局命名空间的，使用方式和写在根节点时使用一样

        ``` javascript
        // 读取 模块 state
        store.state.module1.module2.stateInModule

        // 读取 模块 getter
        store.getters.handleStateInModule

        // 提交（commit） 模块 mutation
        store.commit({
            type: "mutationStateInModule",
            stateInModule:"change by mutationStateInModule"
        })

        // 分发（dispatch） 模块 action
        store.dispatch({
            type:"someActionInModule",
            someArgu:"dispath action"
        })
        ```

    - 有 namespaced 命名空间

        有无 namespaced ，对于读取state是没区别的，因为模块内的状态(state)已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响

        所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名；
        因为 getter、action 及 mutation 都是在根节点使用的原因，所以命名是加上了模块名；
        `模块名1/[模块名2/...模块名n/]命名`的形式。

        这些路径是带命名空间（namespaced:true）的模块的模块名，如果模块没有命名空间，会继承父模块的命名空间（所以只要全都没有命名空间，只是一路继承到根节点的命名空间，action、mutation 和 getter ，就像写在根节点时使用一样）。

        ``` javascript
        // 读取 模块 state
        store.state.module1.module2.stateInModule // 无 namespaced
        store.state.module1.module2['stateInModule'] // 无 namespaced

        store.state.moduleA.moduleB.stateInModule // 带 namespaced
        store.state.moduleA.moduleB['stateInModule'] // 带 namespaced

        // 读取 模块 getter
        store.getter.handleStateInModule // 无 namespaced
        store.getter['handleStateInModule'] // 无 namespaced
        store.getters["moduleA/moduleB/handleStateInModule"]  // 带 namespaced
        // getter时，由于命名加上了注册路径作为属性名时，“/”不是有效的 JavaScript 标识符，所以只能采用方括号表示法来读取属性。

        // 提交（commit） 模块 mutation
        store.commit({ type: "mutationStateInModule"}) // 无 namespaced
        store.commit({ type: "moduleA/moduleB/mutationStateInModule" }) // 带 namespaced


        // 分发（dispatch） 模块 action
        store.dispatch({ type:"someActionInModule"}) // 无 namespaced
        store.dispatch({ type: "moduleA/moduleB/someActionInModule" }) // 有 namespaced
        ```

        + 带命名空间的模块内访问全局内容

            带命名空间后，getter、mutation、action的使用都有所不同

            mutation只能改变当前模块状态，需要访问全局只有 getter，action

            getter，rootState 和 rootGetter 会作为第三和第四参数传入

            action，本来第一个参数context里面就包含rootState 和 rootGetters；action处理函数中，第一个参数context里面部化的commit和局部化的dispatch，将 { root: true } 作为`option`参数传给 dispatch 或 commit 即可。

        + 在带命名空间的模块注册全局 action

            若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中。

            ``` javascript
            actions: {
                someAction: {
                   root: true,
                   handler (namespacedContext, payload) { ... } // -> 'someAction'
                }
            }
            ```

## 辅助函数

* mapState

    `mapState(namespace?: string, map: Array<string> | Object<string | function>): Object`

    为组件创建计算属性以返回 Vuex store 中的状态。`: Object`方法结果返回一个对象的意思

    第一个参数是可选的，可以是一个命名空间字符串。

    对象形式的第二个参数的成员可以是一个函数。function(state: any)

    ``` javascript
    mapState({
        stateA:state => state.stateA,
    }) // // this.stateA

    mapState({
        stateA: "stateA"
    }) // // this.stateA

    mapState(["stateA"]) // // this.stateA
    ```

* mapGetters

    `mapGetters(namespace?: string, map: Array<string> | Object<string>): Object`

    为组件创建计算属性以返回 getter 的返回值。

    第一个参数是可选的，可以是一个命名空间字符串。

    ``` javascript
    ...mapGetters({
        handleStateA:"handleStateA"
    }) // this.handleStateA

    mapGetters(["handleStateA"]) // this.handleStateA
    ```

* mapMutations

    `mapMutations(namespace?: string, map: Array<string> | Object<string | function>): Object`

    创建组件方法提交 mutation。

    第一个参数是可选的，可以是一个命名空间字符串。

    对象形式的第二个参数的成员可以是一个函数。function(commit: function, ...args: any[])

    ``` javascript
    mapMutations({
        mutationStateA: "mutationStateA"
    }) // this.mutationStateA({ type: "mutationStateA", stateA: "xxx" })

    mapMutations({
         xxx: function (commit,...arg) {
            commit({
                type: "mutationStateA"
            })
            commit({
                type: "mutation_by_obj"
            })
        }
    }) // this.xxx。 其实 xxx里面能做任何东西，不一定commit mutation都可以

    mapMutations(["mutationStateA"]) // this.mutationStateA({ type: "mutationStateA", stateA: "xxx" })
    ```

* mapActions
* createNamespacedHelpers

mapState mapGetters mapMutations mapActions 都是类似的。除了mapGetters没有函数形式；mapMutations mapActions 函数形式是直接调用，而不是返回映射


## 文档参考

* https://vuex.vuejs.org/zh/
* https://vuex.vuejs.org/zh/api/