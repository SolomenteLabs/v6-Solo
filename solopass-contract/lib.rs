use cosmwasm_std::{DepsMut, Env, MessageInfo, Response};
use crate::error::ContractError;
use crate::msg::{ExecuteMsg, InstantiateMsg};

pub mod msg;

// Uncomment if you later need state management
// pub mod state;

pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> Result<Response, ContractError> {
    Ok(Response::new().add_attribute("method", "instantiate"))
}

pub fn execute(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::Mint { token_id } => execute_mint(deps, token_id),
        ExecuteMsg::Revoke { token_id } => execute_revoke(deps, token_id),
    }
}

fn execute_mint(deps: DepsMut, token_id: String) -> Result<Response, ContractError> {
    // TODO: Add mint logic
    Ok(Response::new().add_attribute("action", "mint").add_attribute("token_id", token_id))
}

fn execute_revoke(deps: DepsMut, token_id: String) -> Result<Response, ContractError> {
    // TODO: Add revoke logic
    Ok(Response::new().add_attribute("action", "revoke").add_attribute("token_id", token_id))
}
