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
            stateA_computed:state => state.stateA,

            stateA_computed:"stateA"
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

            stateA:"stateA"
        }),
        mapState(["stateA"])
        ```


        ``` javascript
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({
            // ...
        })
        ...mapState([
            // ...
        ])
        ```

* getters

* modules

    默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。



## 总结

* state

    - **直接读取 state**
    
        ``` javascript
        store.state.stateA
        ```

    - **mapState 辅助函数**

        mapState 辅助函数是将 store 中的 state 映射到组件的计算属性中 computed

        ``` javascript
        mapState({
            state_a:state => state.stateA,
        }) // this.state_a

        mapState({
            state_a: "stateA" // "stateA" 等同于 state => state.stateA，或者说 state => state["stateA"]。注意是一个字符串，不是一个变量
            stateA: "stateA" // 不能直接使用es6对象简写模式{name,age,cartNum}因为值是一个字符串，不是一个变量，除非这个变量定义了
        }) // this.state_a

        mapState(["stateA"]) // this.stateA , 等同于 {stateA: "stateA"}
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

    - **直接读取 getter**
        ``` javascript
        store.getters.handleStateA
        ```

    - **mapGetters 辅助函数**
    
        mapGetters 辅助函数是将 store 中的 getter 映射到组件的计算属性中 computed

        ``` javascript
        mapGetters({
            handle_state_a:"handleStateA"
        }) // this.handle_state_a

        mapGetters(["handleStateA"]) // this.handleStateA
        ```

* mutations

    在 store 上注册 mutation，处理函数总是接受 state 作为第一个参数（如果定义在模块中，则为模块的局部状态），payload 作为第二个参数（可选）。

    - mutation 处理函数

        ``` javascript
        // mutation 处理函数
        someMutation(
            state,  // 等同于 `store.state`，如果在模块中定义则为模块的局部状态
            payload // 载荷，提交（commit）mutation时，传入的值
        ){
            // ...
        }
        ```

    - 提交（commit） mutation

        你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。

        ```javascript
        // 提交 mutation
        commit(type: string, payload?: any, options?: Object)

        commit(mutation: Object, options?: Object)

        // 提交 mutation。options 里可以有 root: true，它允许在命名空间模块里提交根的 mutation。
        ```

        + **直接提交 mutation**
        
            ``` javascript
            store.commit("mutationStateA", {
                stateA: "xxx"
            }) // 第二个参数 { stateA: "xxx" } 作为payload载荷传入

            store.commit({
                type: "mutationStateA",
                stateA: "xxxxxx"
            }) // 对象形式 整个对象 { type: "mutationStateA", stateA: "xxxxxx" } 作为payload载荷传入
            ```

        + **辅助函数 mapMutations**
        
            ``` javascript
            mapMutations({
                mutation_state_a: "mutationStateA"
            }) // this.mutation_state_a({ stateA: "xxx" })     this.mutation_state_a(payload) 映射为 store.commit("mutationStateA",payload)

            mapMutations(["mutationStateA"]) // this.mutationStateA({ stateA: "xxx" })     this.mutationStateA(payload) 映射为 store.commit("mutationStateA",payload)
            ```

* actions

    + 在 store 上注册 action。处理函数总是接受 context 作为第一个参数，payload 作为第二个参数（可选）。

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

    + action 处理函数

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

    + 分发（dispatch） action

        你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：

        ``` javascript
        dispatch(type: string, payload?: any, options?: Object)

        dispatch(action: Object, options?: Object)

        // 分发 action。options 里可以有 root: true，它允许在命名空间模块里分发根的 action。返回一个解析所有被触发的 action 处理器的 Promise。
        ```

        - **直接分发 action**

            ``` javascript
            store.dispatch("someAction", {
                someArgument: 10,
                someParameter: "lorem"
            }) // 第二个参数 { someArgument: 10, someParameter: "lorem" } 作为payload载荷传入

            store.dispatch({
                type: "someAction",
                someArgument: 10,
                someParameter: "lorem"
            }) // 对象形式 整个对象 { type: "someAction", someArgument: 10, someParameter: "lorem" } 作为payload载荷传入
            ```

        - **辅助函数 mapActions**

            ``` javascript
            mapActions({
                some_action: "someAction"
            }) // this.some_action({ someArgument: 10, someParameter: "lorem" })   将 `this.some_action()` 映射为 `this.$store.dispatch('someAction')`

            mapActions(["someAction"]) // this.someAction({ someArgument: 10, someParameter: "lorem" })
            ```

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

        只能采用这种形式

        ``` javascript
        ...mapState({
            stateInModule1: state => state.moduleA.module2.stateInModule, // this.stateInModule1
        }),
        ```



    - 有 namespaced 命名空间

        有无 namespaced ，对于读取state是没区别的，因为模块内的状态(state)已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响

        所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名；
        因为 getter、action 及 mutation 都是在根节点使用的原因，所以命名是加上了模块名；
        `模块名1/[模块名2/...模块名n/]命名`的形式。

        这些路径是带命名空间（namespaced:true）的模块的模块名，如果模块没有命名空间，会继承父模块的命名空间（所以只要全都没有命名空间，只是一路继承到根节点的命名空间，action、mutation 和 getter ，就像写在根节点时使用一样）。

        ``` javascript
        ///////////////
        // 读取 模块 state //
        ///////////////
        store.state.module1.module2.stateInModule // 无 namespaced
        store.state.module1.module2['stateInModule'] // 无 namespaced

        store.state.moduleA.moduleB.stateInModule // 带 namespaced
        store.state.moduleA.moduleB['stateInModule'] // 带 namespaced


        ////////////////
        // 读取 模块 getter //
        ////////////////
        store.getter.handleStateInModule // 无 namespaced
        store.getter['handleStateInModule'] // 无 namespaced
        store.getters["moduleA/moduleB/handleStateInModule"]  // 带 namespaced
        // getter时，由于命名加上了注册路径作为属性名时，“/”不是有效的 JavaScript 标识符，所以只能采用方括号表示法来读取属性。


        ////////////////////////
        // 提交（commit） 模块 mutation //
        ////////////////////////
        store.commit({ type: "mutationStateInModule" }) // 无 namespaced
        store.commit({ type: "moduleA/moduleB/mutationStateInModule" }) // 带 namespaced


        ////////////////////////
        // 分发（dispatch） 模块 action //
        ////////////////////////
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

        + map 辅助函数
        
            * 普通形式

                ``` javascript
                import { mapState, mapGetters, mapMutations, mapActions } from "vuex"

                /////////////////
                // 读取 模块 state //
                /////////////////
                ...mapState({
                    stateInModule1: state => state.moduleA.moduleB.stateInModule, // this.stateInModule1
                    stateInModule2: state => state.moduleA.moduleB["stateInModule"], // this.stateInModule2
                    stateInModule3: "moduleA/moduleB/stateInModule" // × 错误的 由于 state => state["moduleA/moduleB/stateInModule"] 不是有效的state
                }),
                ...mapState(["moduleA/moduleB/stateInModule"]), // × 错误的 同理 由于 state => state["moduleA/moduleB/stateInModule"] 不是有效的state


                /////////////////
                // 读取 模块 getter //
                /////////////////
                ...mapGetters({
                    handleStateInModule1: "moduleA/moduleB/handleStateInModule" // this.handleStateInModule1
                }),
                ...mapGetters(["moduleA/moduleB/handleStateInModule"]) // this["moduleA/moduleB/handleStateInModule"]


                ////////////////////////
                // 提交（commit） 模块 mutation //
                ////////////////////////
                ...mapMutations({
                    mutationStateInModule1: "moduleA/moduleB/mutationStateInModule" // this.mutationStateInModule1(payload)
                    // 由于函数形式，只是一个封装好的方法(自带commit方法)，就没有必要，基本和命名空间没关系
                }),
                ...mapMutations(["moduleA/moduleB/mutationStateInModule"]), // this["moduleA/moduleB/mutationStateInModule"](payload)


                ////////////////////////
                // 分发（dispatch） 模块 action //
                ////////////////////////
                ...mapActions({
                    someActionInModule1: "moduleA/moduleB/someActionInModule" // this.someActionInModule1(payload)
                    // 由于函数形式，只是一个封装好的方法(自带dispatch方法)，就没有必要，基本和命名空间没关系
                }),
                ...mapActions(["moduleA/moduleB/someActionInModule"]) // this["moduleA/moduleB/someActionInModule"](payload)
                ```
                
                这种写法可以多个模块的内容写在同一个 mapState mapGetters mapMutations mapActions 里面。

                ``` javascript
                ...mapState({
                    stateA: "stateA", // 根目录
                    stateInModule: state => state.moduleA.moduleB.stateInModule, // moduleA里面的moduleB里面的
                    stateInModule2: state => state.module1.module2.stateInModule // module1里面的module2里面的
                })
                ```

            * 将模块的空间名称字符串作为第一个参数传递辅助函数，这样所有绑定都会自动将该模块作为上下文。

                第一个参数是命名空间字符串，剩下的就和在根目录写法一样，**推荐使用**

                ``` javascript
                import { mapState, mapGetters, mapMutations, mapActions } from "vuex"

                /////////////////
                // 读取 模块 state //
                /////////////////
                ...mapState("moduleA/moduleB", {
                    stateInModule1: "stateInModule"
                }), // this.stateInModule1
                ...mapState("moduleA/moduleB", ["stateInModule"]), // this.stateInModule


                /////////////////
                // 读取 模块 getter //
                /////////////////
                ...mapGetters("moduleA/moduleB", {
                    handleStateInModule1: "handleStateInModule" // this.handleStateInModule1,
                }),
                ...mapGetters("moduleA/moduleB", ["handleStateInModule"]) // this.handleStateInModule


                ////////////////////////
                // 提交（commit） 模块 mutation //
                ////////////////////////
                ...mapMutations("moduleA/moduleB", {
                    mutationStateInModule1: "mutationStateInModule" // this.mutationStateInModule1(payload)
                }),
                ...mapMutations("moduleA/moduleB", ["mutationStateInModule"]), // this.mutationStateInModule(payload)


                ////////////////////////
                // 分发（dispatch） 模块 action //
                ////////////////////////
                ...mapActions("moduleA/moduleB", {
                    someActionInModule1: "someActionInModule" // this.someActionInModule1(payload)
                }),
                ...mapActions("moduleA/moduleB", ["someActionInModule"]) // this.someActionInModule(payload)
                ```

                这种写法，如果涉及两个模块的内容，需要用两个辅助函数分别去映射不同模块的内容

                ``` javascript

                ...mapState("moduleA/moduleB", {
                    stateInModule1: "stateInModule"
                }), // moduleA里面的moduleB里面的

                ...mapState("module1/module2", {
                    stateInModule2: "stateInModule"
                }) // module1里面的module2里面的

                ```

            * 通过使用 `createNamespacedHelpers` 创建基于某个命名空间辅助函数。它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数

                用 `createNamespacedHelpers` 生成绑定空间的辅助函数，剩下的就和在根目录写法一样，**推荐使用**                

                ``` javascript
                import { createNamespacedHelpers } from "vuex"
                let { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("moduleA/moduleB")

                /////////////////
                // 读取 模块 state //
                /////////////////
                ...mapState({
                    stateInModule1: "stateInModule"
                }), // this.stateInModule1
                ...mapState(["stateInModule"]), // this.stateInModule


                /////////////////
                // 读取 模块 getter //
                /////////////////
                ...mapGetters({
                    handleStateInModule1: "handleStateInModule" // this.handleStateInModule1,
                }),
                ...mapGetters(["handleStateInModule"]) // this.handleStateInModule


                ////////////////////////
                // 提交（commit） 模块 mutation //
                ////////////////////////
                ...mapMutations({
                    mutationStateInModule1: "mutationStateInModule" // this.mutationStateInModule1(payload)
                }),
                ...mapMutations(["mutationStateInModule"]), // this.mutationStateInModule(payload)


                ////////////////////////
                // 分发（dispatch） 模块 action //
                ////////////////////////
                ...mapActions({
                    someActionInModule1: "someActionInModule" // this.someActionInModule1(payload)
                }),
                ...mapActions(["someActionInModule"]) // this.someActionInModule(payload)
                ```

                这种写法，如果涉及两个模块的内容，要不就分别不同模块调用不同 `createNamespacedHelpers` 来生成绑定在不同命名空间的辅助函数，要不就用原始的辅助函数

                ``` javascript
                // 原始的辅助函数，用之前的写法，对另外的模块做映射
                Vuex.mapState Vuex.mapGetters Vuex.mapMutations Vuex.mapActions  

                // 绑定在不同命名空间的辅助函数，分别对不同模块的内容做映射
                createNamespacedHelpers("moduleA/moduleB").mapState
                createNamespacedHelpers("module1/module2").mapState
                ···
## 辅助函数

* mapState

    在单独构建的版本中辅助函数为 `Vuex.mapState`

    `mapState(namespace?: string, map: Array<string> | Object<string | function>): Object`

    为组件创建计算属性以返回 Vuex store 中的状态。`: Object`方法结果返回一个对象的意思

    第一个参数是可选的，可以是一个命名空间字符串。

    对象形式的第二个参数的成员可以是一个函数。function(state: any)

    ``` javascript
    mapState({
        state_a: state => state.stateA, // this.state_a
        state_a: "stateA" // this.state_a  ,"stateA" 相当于 state => state["stateA"] 即系 state_a: state => state["stateA"]
    })

    mapState(["stateA"]) // this.stateA , 相当于 {stateA: "stateA"} 即系 stateA: state => state["stateA"]
    ```

* mapGetters

    在单独构建的版本中辅助函数为 `Vuex.mapGetters`

    `mapGetters(namespace?: string, map: Array<string> | Object<string>): Object`

    为组件创建计算属性以返回 getter 的返回值。

    第一个参数是可选的，可以是一个命名空间字符串。

    ``` javascript
    mapGetters({
        handle_state_a:"handleStateA"
    }) // this.handle_state_a

    mapGetters(["handleStateA"]) // this.handleStateA
    ```

* mapMutations

    在单独构建的版本中辅助函数为 `Vuex.mapMutations`

    `mapMutations(namespace?: string, map: Array<string> | Object<string | function>): Object`

    创建组件方法提交 mutation。

    第一个参数是可选的，可以是一个命名空间字符串。

    对象形式的第二个参数的成员可以是一个函数。function(commit: function, ...args: any[])

    ``` javascript
    mapMutations({
        mutation_state_a: "mutationStateA", // this.mutation_state_a(payload) 映射为 store.commit("mutationStateA",payload)
        someMethod1: function (commit,...arg) {
            console.log(...arg)
            commit({
                type: "mutationStateA"
            })
            commit({
                type: "mutation_by_obj"
            })
        } // this.someMethod1('arg1','arg2')。 其实 someMethod1里面能做任何东西，不一定commit mutation都可以
    })

    mapMutations(["mutationStateA"]) // this.mutationStateA(payload) 映射为 store.commit("mutationStateA",payload)
    ```

* mapActions

    在单独构建的版本中辅助函数为 `Vuex.mapActions`

    `mapActions(namespace?: string, map: Array<string> | Object<string | function>): Object`

    创建组件方法分发 action。

    第一个参数是可选的，可以是一个命名空间字符串。

    对象形式的第二个参数的成员可以是一个函数。function(dispatch: function, ...args: any[])

    ``` javascript
    mapActions({
        some_action: "someAction", // 将 `this.some_action()` 映射为 `this.$store.dispatch('someAction')`
        someMethod2: function (dispatch, ...arg) {
            dispatch({
                type: "someAction",
                ...arg
            })
        } // this.someMethod2('arg1','arg2')。 其实 someMethod2 里面能做任何东西，不一定 dispatch action 都可以
    })

    mapActions(["someAction"]) // 将 `this.someAction()` 映射为 `this.$store.dispatch('someAction')`
    ```

* createNamespacedHelpers

    在单独构建的版本中辅助函数为 `Vuex.createNamespacedHelpers`

    `createNamespacedHelpers(namespace: string): Object`

    创建基于命名空间的组件绑定辅助函数。其返回一个包含 mapState、mapGetters、mapActions 和 mapMutations 的对象。它们都已经绑定在了给定的命名空间上。

mapState mapGetters mapMutations mapActions 都是类似的。除了mapGetters没有函数形式；mapMutations mapActions 函数形式是直接调用，而不是返回映射。


## 文档参考

* https://vuex.vuejs.org/zh/
* https://vuex.vuejs.org/zh/api/