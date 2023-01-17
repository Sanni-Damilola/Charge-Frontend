const Dispatch = (state: any, action: any) => {
  switch (action.type) {
    case "Toggle":
      return {
        show: !state.show,
      };
  }
};

export default Dispatch;
