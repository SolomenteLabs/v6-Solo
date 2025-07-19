use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Binary, Uint128};

#[cw_serde]
pub struct InstantiateMsg {
    pub duration_days: u64,
    pub gated_feature: String,
    pub owner: String,
}

#[cw_serde]
pub enum ExecuteMsg {
    MintAccess {},
    Revoke {},
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(bool)]
    IsActive { address: String },

    #[returns(String)]
    GatedFeature {},

    #[returns(String)]
    Owner {},
}
