use cosmwasm_std::{entry_point, Deps, DepsMut, Env, MessageInfo, Response, StdResult, Binary};
use cosmwasm_std::{attr};
use crate::msg::{InstantiateMsg, ExecuteMsg, QueryMsg};
use crate::state::{STATE, State};

pub mod msg;
pub mod state;

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> StdResult<Response> {
    let state = State { count: 0 };
    STATE.save(deps.storage, &state)?;
    Ok(Response::default())
}

#[entry_point]
pub fn execute(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: ExecuteMsg,
) -> StdResult<Response> {
    match msg {
        ExecuteMsg::Increment {} => try_increment(deps),
    }
}

pub fn try_increment(deps: DepsMut) -> StdResult<Response> {
    STATE.update(deps.storage, |mut state| -> StdResult<_> {
        state.count += 1;
        Ok(state)
    })?;

    Ok(Response::new().add_attributes(vec![attr("action", "increment")]))
}

#[entry_point]
pub fn query(_deps: Deps, _env: Env, _msg: QueryMsg) -> StdResult<Binary> {
    // For now, just a placeholder
    Ok(Binary::default())
}

