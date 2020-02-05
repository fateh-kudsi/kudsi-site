import Vuex from "vuex";
import { fireDb } from "~/plugins/firebase.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedDis: [],
      finleDis: [],
      singleDis: []
    },
    mutations: {
      setDis(state, dis) {
        state.loadedDis = dis;
      },
      setFinleDis(state, dis) {
        state.finleDis = dis;
      },
      restDis(state) {
        let dis = state.loadedDis;
        return (state.finleDis = dis);
      },

      changeType(state, by) {
        state.finleDis = by;
      },
      singleDis(state,payload) {
        state.singleDis = payload
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return fireDb
          .collection("dis")
          .get()
          .then(snapshot => {
            let disArray = [];
            snapshot.forEach(doc => {
              let dis = doc.data();

              disArray.push({ ...dis, id: doc.id });
              vuexContext.commit("setDis", disArray);
              vuexContext.commit("setFinleDis", disArray);
            });
          });
      },
      changeType({ state, commit }, payload) {
        let res1 = null;
        if (payload == "all") {
          res1 = state.loadedDis;
          commit("changeType", res1);
        } else {
          let res = state.loadedDis.filter(list => {
            return list.type.includes(payload);
          });
          commit("changeType", res);
        }
      },
      restDis({commit}) {
      commit('restDis')
      }
    },
    getters: {
      loadedDis(state) {
        return state.loadedDis;
      },
      finleDis(state) {
        return state.finleDis;
      }
    }
  });
};

export default createStore;
